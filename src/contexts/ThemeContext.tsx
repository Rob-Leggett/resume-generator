'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { ThemeDefinition } from '../types/resume';
import { themes, themeNames, defaultTheme } from '../../themes/definitions';

interface ThemeContextType {
  currentTheme: ThemeDefinition;
  themeName: string;
  setTheme: (name: string) => void;
  availableThemes: { name: string; displayName: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function injectThemeVariables(theme: ThemeDefinition) {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  // Colors
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-secondary', theme.colors.secondary);
  root.style.setProperty('--color-background', theme.colors.background);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-text-secondary', theme.colors.textSecondary);
  root.style.setProperty('--color-heading', theme.colors.heading);
  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-link', theme.colors.link);
  root.style.setProperty('--color-border', theme.colors.border);
  root.style.setProperty('--color-error', theme.colors.error);
  
  // Typography
  root.style.setProperty('--font-family', theme.typography.fontFamily);
  root.style.setProperty('--font-family-heading', theme.typography.fontFamilyHeading);
  root.style.setProperty('--font-size-base', theme.typography.baseFontSize);
  root.style.setProperty('--heading-scale', theme.typography.headingScale.toString());
  
  // Spacing
  root.style.setProperty('--spacing-unit', theme.spacing.unit);
  root.style.setProperty('--spacing-panel', theme.spacing.panelPadding);
  root.style.setProperty('--spacing-section', theme.spacing.sectionGap);
  
  // Border radius
  root.style.setProperty('--border-radius', theme.borderRadius);
}

interface ResumeThemeProviderProps {
  children: ReactNode;
}

export function ResumeThemeProvider({ children }: ResumeThemeProviderProps) {
  const { theme: nextThemeName, setTheme: setNextTheme } = useTheme();
  
  const currentThemeName = nextThemeName && themes[nextThemeName] ? nextThemeName : defaultTheme;
  const currentTheme = themes[currentThemeName] || themes[defaultTheme];
  
  useEffect(() => {
    injectThemeVariables(currentTheme);
  }, [currentTheme]);

  const setTheme = (name: string) => {
    if (themes[name]) {
      setNextTheme(name);
    }
  };

  const availableThemes = themeNames.map(name => ({
    name,
    displayName: themes[name].displayName,
  }));

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeName: currentThemeName,
        setTheme,
        availableThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useResumeTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useResumeTheme must be used within a ResumeThemeProvider');
  }
  return context;
}

export { ThemeContext };
