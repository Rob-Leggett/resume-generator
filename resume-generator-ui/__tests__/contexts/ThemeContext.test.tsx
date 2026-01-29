import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'next-themes';
import { ResumeThemeProvider, useResumeTheme } from '../../src/contexts';
import { themeNames } from '../../themes/definitions';

// Unmock next-themes for this test file
jest.unmock('next-themes');

// Test component that uses the context
function TestConsumer() {
  const { themeName, availableThemes, currentTheme } = useResumeTheme();
  
  return (
    <div>
      <span data-testid="theme-name">{themeName}</span>
      <span data-testid="themes-count">{availableThemes.length}</span>
      <span data-testid="display-name">{currentTheme.displayName}</span>
      <span data-testid="font-family">{currentTheme.typography.fontFamily}</span>
    </div>
  );
}

function renderWithThemeProvider(ui: React.ReactElement) {
  return render(
    <ThemeProvider attribute="data-theme" defaultTheme="modern" themes={themeNames} enableSystem={false}>
      <ResumeThemeProvider>
        {ui}
      </ResumeThemeProvider>
    </ThemeProvider>
  );
}

describe('ThemeContext', () => {
  it('should provide theme data', () => {
    renderWithThemeProvider(<TestConsumer />);
    
    expect(screen.getByTestId('theme-name')).toBeInTheDocument();
    expect(screen.getByTestId('display-name')).toBeInTheDocument();
  });

  it('should have available themes', () => {
    renderWithThemeProvider(<TestConsumer />);
    
    const count = parseInt(screen.getByTestId('themes-count').textContent || '0');
    expect(count).toBeGreaterThanOrEqual(4); // modern, classic, minimal, dark
  });

  it('should provide typography information', () => {
    renderWithThemeProvider(<TestConsumer />);
    
    expect(screen.getByTestId('font-family').textContent).toBeTruthy();
  });

  it('should throw error when useResumeTheme is used outside provider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => render(<TestConsumer />)).toThrow(
      'useResumeTheme must be used within a ResumeThemeProvider'
    );
    
    consoleError.mockRestore();
  });
});
