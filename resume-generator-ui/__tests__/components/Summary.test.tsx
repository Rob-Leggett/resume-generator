import React from 'react';
import { render, screen } from '@testing-library/react';
import Summary from '../../components/Summary/Summary';
import { ResumeDataProvider } from '../../src/contexts';

// Mock Auth0
const mockUseAuth0 = jest.fn();
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => mockUseAuth0(),
}));

function renderWithProvider(ui: React.ReactElement) {
  return render(
    <ResumeDataProvider>
      {ui}
    </ResumeDataProvider>
  );
}

describe('Summary', () => {
  beforeEach(() => {
    mockUseAuth0.mockReset();
  });

  it('should show loading state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: true,
      error: undefined,
    });

    renderWithProvider(<Summary />);
    expect(screen.getByText('Loading Summary')).toBeInTheDocument();
  });

  it('should show error state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: { message: 'Test error' },
    });

    renderWithProvider(<Summary />);
    expect(screen.getByText(/Oops.*Test error/)).toBeInTheDocument();
  });

  it('should render summary header when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Summary />);
    expect(screen.getByText('Summary')).toBeInTheDocument();
  });

  it('should render summary content when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Summary />);
    // Check that summary items are rendered
    const summaryItems = document.querySelectorAll('.summary-item');
    expect(summaryItems.length).toBeGreaterThan(0);
  });

  it('should not render content when not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Summary />);
    expect(screen.getByText('Summary')).toBeInTheDocument();
    const summaryItems = document.querySelectorAll('.summary-item');
    expect(summaryItems.length).toBe(0);
  });
});
