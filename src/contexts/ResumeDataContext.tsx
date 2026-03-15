'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ResumeData } from '../types/resume';

// Import default template
import defaultTemplate from '../../templates/default.json';

interface ResumeDataContextType {
  data: ResumeData;
  templateName: string;
  setTemplate: (name: string) => void;
  updateData: (newData: Partial<ResumeData>) => void;
  availableTemplates: string[];
  isLoading: boolean;
  error: string | null;
}

const ResumeDataContext = createContext<ResumeDataContextType | undefined>(undefined);

// List of available templates (can be extended)
const AVAILABLE_TEMPLATES = ['default', 'example'];

interface ResumeDataProviderProps {
  children: ReactNode;
  initialTemplate?: string;
}

export function ResumeDataProvider({ children, initialTemplate = 'default' }: ResumeDataProviderProps) {
  const [data, setData] = useState<ResumeData>(defaultTemplate as ResumeData);
  const [templateName, setTemplateName] = useState(initialTemplate);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTemplate = async (name: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Dynamic import of template
      const template = await import(`../../templates/${name}.json`);
      setData(template.default as ResumeData);
      setTemplateName(name);
    } catch (err) {
      setError(`Failed to load template: ${name}`);
      console.error('Template loading error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const setTemplate = (name: string) => {
    if (AVAILABLE_TEMPLATES.includes(name)) {
      loadTemplate(name);
    } else {
      setError(`Template not found: ${name}`);
    }
  };

  const updateData = (newData: Partial<ResumeData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  useEffect(() => {
    if (initialTemplate !== 'default') {
      loadTemplate(initialTemplate);
    }
  }, [initialTemplate]);

  return (
    <ResumeDataContext.Provider
      value={{
        data,
        templateName,
        setTemplate,
        updateData,
        availableTemplates: AVAILABLE_TEMPLATES,
        isLoading,
        error,
      }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
}

export function useResumeData(): ResumeDataContextType {
  const context = useContext(ResumeDataContext);
  if (context === undefined) {
    throw new Error('useResumeData must be used within a ResumeDataProvider');
  }
  return context;
}

export { ResumeDataContext };
