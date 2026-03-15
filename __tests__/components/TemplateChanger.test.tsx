import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TemplateChanger from '../../components/TemplateChanger/TemplateChanger';
import { ResumeDataProvider } from '../../src/contexts';

describe('TemplateChanger', () => {
  function renderWithProvider() {
    return render(
      <ResumeDataProvider>
        <TemplateChanger />
      </ResumeDataProvider>
    );
  }

  it('should render template selector', () => {
    renderWithProvider();
    
    expect(screen.getByText('Template:')).toBeInTheDocument();
  });

  it('should render dropdown with template options', () => {
    renderWithProvider();
    
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('should have default template selected', () => {
    renderWithProvider();
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('default');
  });

  it('should have available templates as options', () => {
    renderWithProvider();
    
    const options = screen.getAllByRole('option');
    expect(options.length).toBeGreaterThanOrEqual(2);
  });

  it('should allow template selection', async () => {
    const user = userEvent.setup();
    renderWithProvider();
    
    const select = screen.getByRole('combobox');
    await user.selectOptions(select, 'example');
    
    expect(select).toHaveValue('example');
  });
});
