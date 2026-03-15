import React from 'react';
import { render, screen } from '@testing-library/react';
import Achievements from '../../components/Achievements/Achievements';
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

describe('Achievements', () => {
  beforeEach(() => {
    mockUseAuth0.mockReset();
  });

  it('should show loading state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: true,
      error: undefined,
    });

    renderWithProvider(<Achievements />);
    expect(screen.getByText('Loading Achievements')).toBeInTheDocument();
  });

  it('should show error state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: { message: 'Test error' },
    });

    renderWithProvider(<Achievements />);
    expect(screen.getByText(/Oops.*Test error/)).toBeInTheDocument();
  });

  it('should render achievements header when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Achievements />);
    expect(screen.getByText('Key Achievements')).toBeInTheDocument();
  });

  it('should render achievement items when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Achievements />);
    const achievementItems = document.querySelectorAll('.achievements-data');
    expect(achievementItems.length).toBeGreaterThan(0);
  });

  it('should not render content when not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isLoading: false,
      error: undefined,
    });

    renderWithProvider(<Achievements />);
    expect(screen.getByText('Key Achievements')).toBeInTheDocument();
    const achievementItems = document.querySelectorAll('.achievements-data');
    expect(achievementItems.length).toBe(0);
  });
});
