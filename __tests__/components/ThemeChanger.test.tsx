import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'next-themes';
import ThemeChanger from '../../components/ThemeChanger/ThemeChanger';
import { ResumeThemeProvider } from '../../src/contexts';
import { themeNames } from '../../themes/definitions';

// Unmock next-themes for this test
jest.unmock('next-themes');

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <ThemeProvider attribute="data-theme" defaultTheme="modern" themes={themeNames} enableSystem={false}>
      <ResumeThemeProvider>
        {ui}
      </ResumeThemeProvider>
    </ThemeProvider>
  );
}

describe('ThemeChanger', () => {
  it('should render theme selector', () => {
    renderWithProviders(<ThemeChanger />);
    
    expect(screen.getByText('Theme:')).toBeInTheDocument();
  });

  it('should render dropdown with theme options', () => {
    renderWithProviders(<ThemeChanger />);
    
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('should have all available themes as options', () => {
    renderWithProviders(<ThemeChanger />);
    
    const options = screen.getAllByRole('option');
    expect(options.length).toBeGreaterThanOrEqual(4);
  });

  it('should allow theme selection', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ThemeChanger />);
    
    const select = screen.getByRole('combobox');
    await user.selectOptions(select, 'classic');
    
    expect(select).toHaveValue('classic');
  });
});
