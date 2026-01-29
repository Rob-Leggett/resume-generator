import React from 'react';
import { render, screen } from '@testing-library/react';
import Certifications from '../../components/Certifications/Certifications';
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

describe('Certifications', () => {
  beforeEach(() => {
    mockUseAuth0.mockReset();
  });

  it('should show loading state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: true,
      error: undefined,
    });

    renderWithProvider(<Certifications />);
    expect(screen.getByText('Loading Certifications')).toBeInTheDocument();
  });

  it('should show error state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: { message: 'Test error' },
    });

    renderWithProvider(<Certifications />);
    expect(screen.getByText(/Oops.*Test error/)).toBeInTheDocument();
  });

  it('should render certifications header when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Certifications />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  it('should render certification items with links when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Certifications />);
    const certItems = document.querySelectorAll('.certification-data');
    expect(certItems.length).toBeGreaterThan(0);
    
    // Check for badge links
    const badgeLinks = screen.getAllByText('View Badge');
    expect(badgeLinks.length).toBeGreaterThan(0);
  });

  it('should not render content when not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Certifications />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    const certItems = document.querySelectorAll('.certification-data');
    expect(certItems.length).toBe(0);
  });
});
