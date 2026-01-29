import React from 'react';
import { render, screen } from '@testing-library/react';
import Experiences from '../../components/Experiences/Experiences';
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

describe('Experiences', () => {
  beforeEach(() => {
    mockUseAuth0.mockReset();
  });

  it('should show loading state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: true,
      error: undefined,
    });

    renderWithProvider(<Experiences />);
    expect(screen.getByText('Loading Experiences')).toBeInTheDocument();
  });

  it('should show error state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: { message: 'Test error' },
    });

    renderWithProvider(<Experiences />);
    expect(screen.getByText(/Oops.*Test error/)).toBeInTheDocument();
  });

  it('should render experiences header when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Experiences />);
    expect(screen.getByText('Experiences')).toBeInTheDocument();
  });

  it('should render experience items when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Experiences />);
    // Check for role headers
    const roleHeaders = document.querySelectorAll('.experiences-role-header');
    expect(roleHeaders.length).toBeGreaterThan(0);
  });

  it('should not render content when not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Experiences />);
    expect(screen.getByText('Experiences')).toBeInTheDocument();
    const roleHeaders = document.querySelectorAll('.experiences-role-header');
    expect(roleHeaders.length).toBe(0);
  });
});
