import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../../components/Skills/Skills';
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

describe('Skills', () => {
  beforeEach(() => {
    mockUseAuth0.mockReset();
  });

  it('should show loading state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: true,
      error: undefined,
    });

    renderWithProvider(<Skills />);
    expect(screen.getByText('Loading Skills')).toBeInTheDocument();
  });

  it('should show error state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: { message: 'Test error' },
    });

    renderWithProvider(<Skills />);
    expect(screen.getByText(/Oops.*Test error/)).toBeInTheDocument();
  });

  it('should render skills header when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('should render skill items when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Skills />);
    const skillItems = document.querySelectorAll('.skills-data');
    expect(skillItems.length).toBeGreaterThan(0);
  });

  it('should not render content when not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
    const skillItems = document.querySelectorAll('.skills-data');
    expect(skillItems.length).toBe(0);
  });
});
