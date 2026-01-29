import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ResumeDataProvider, useResumeData } from '../../src/contexts';

// Test component that uses the context
function TestConsumer() {
  const { data, templateName, availableTemplates, isLoading, error } = useResumeData();
  
  return (
    <div>
      <span data-testid="template-name">{templateName}</span>
      <span data-testid="templates-count">{availableTemplates.length}</span>
      <span data-testid="loading">{isLoading ? 'loading' : 'loaded'}</span>
      <span data-testid="error">{error || 'no-error'}</span>
      <span data-testid="summary-count">{data.summary.length}</span>
      <span data-testid="experiences-count">{data.experiences.length}</span>
    </div>
  );
}

describe('ResumeDataContext', () => {
  it('should provide default template data', () => {
    render(
      <ResumeDataProvider>
        <TestConsumer />
      </ResumeDataProvider>
    );
    
    expect(screen.getByTestId('template-name')).toHaveTextContent('default');
    expect(screen.getByTestId('loading')).toHaveTextContent('loaded');
    expect(screen.getByTestId('error')).toHaveTextContent('no-error');
  });

  it('should have available templates', () => {
    render(
      <ResumeDataProvider>
        <TestConsumer />
      </ResumeDataProvider>
    );
    
    expect(parseInt(screen.getByTestId('templates-count').textContent || '0')).toBeGreaterThan(0);
  });

  it('should have resume data from template', () => {
    render(
      <ResumeDataProvider>
        <TestConsumer />
      </ResumeDataProvider>
    );
    
    expect(parseInt(screen.getByTestId('summary-count').textContent || '0')).toBeGreaterThan(0);
    expect(parseInt(screen.getByTestId('experiences-count').textContent || '0')).toBeGreaterThan(0);
  });

  it('should throw error when useResumeData is used outside provider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => render(<TestConsumer />)).toThrow(
      'useResumeData must be used within a ResumeDataProvider'
    );
    
    consoleError.mockRestore();
  });
});

describe('ResumeDataContext - setTemplate', () => {
  function TemplateChanger() {
    const { templateName, setTemplate, isLoading } = useResumeData();
    
    return (
      <div>
        <span data-testid="current-template">{templateName}</span>
        <span data-testid="loading">{isLoading ? 'loading' : 'loaded'}</span>
        <button onClick={() => setTemplate('example')}>Change to example</button>
      </div>
    );
  }

  it('should allow changing templates', async () => {
    const user = userEvent.setup();
    
    render(
      <ResumeDataProvider>
        <TemplateChanger />
      </ResumeDataProvider>
    );
    
    expect(screen.getByTestId('current-template')).toHaveTextContent('default');
    
    await user.click(screen.getByRole('button'));
    
    await waitFor(() => {
      expect(screen.getByTestId('current-template')).toHaveTextContent('example');
    });
  });
});
