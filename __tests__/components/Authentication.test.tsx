import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Authentication from '../../components/Authentication/Authentication';

// Mock Auth0
const mockLoginWithRedirect = jest.fn();
const mockLogout = jest.fn();
const mockUseAuth0 = jest.fn();

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => mockUseAuth0(),
}));

describe('Authentication', () => {
  beforeEach(() => {
    mockUseAuth0.mockReset();
    mockLoginWithRedirect.mockReset();
    mockLogout.mockReset();
  });

  it('should show loading state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isAuthenticated: false,
      isLoading: true,
      error: undefined,
      loginWithRedirect: mockLoginWithRedirect,
      logout: mockLogout,
    });

    render(<Authentication />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should show error state', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isAuthenticated: false,
      isLoading: false,
      error: { message: 'Auth error' },
      loginWithRedirect: mockLoginWithRedirect,
      logout: mockLogout,
    });

    render(<Authentication />);
    expect(screen.getByText(/Oops.*Auth error/)).toBeInTheDocument();
  });

  it('should show login button when not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isAuthenticated: false,
      isLoading: false,
      error: undefined,
      loginWithRedirect: mockLoginWithRedirect,
      logout: mockLogout,
    });

    render(<Authentication />);
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('should call loginWithRedirect when login button clicked', async () => {
    const user = userEvent.setup();
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isAuthenticated: false,
      isLoading: false,
      error: undefined,
      loginWithRedirect: mockLoginWithRedirect,
      logout: mockLogout,
    });

    render(<Authentication />);
    await user.click(screen.getByRole('button', { name: /log in/i }));
    
    expect(mockLoginWithRedirect).toHaveBeenCalled();
  });

  it('should show user greeting when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'John Doe' },
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      loginWithRedirect: mockLoginWithRedirect,
      logout: mockLogout,
    });

    render(<Authentication />);
    expect(screen.getByText(/Hello John Doe/)).toBeInTheDocument();
  });

  it('should show logout button when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'John Doe' },
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      loginWithRedirect: mockLoginWithRedirect,
      logout: mockLogout,
    });

    render(<Authentication />);
    expect(screen.getByRole('button', { name: /log out/i })).toBeInTheDocument();
  });

  it('should call logout when logout button clicked', async () => {
    const user = userEvent.setup();
    mockUseAuth0.mockReturnValue({
      user: { name: 'John Doe' },
      isAuthenticated: true,
      isLoading: false,
      error: undefined,
      loginWithRedirect: mockLoginWithRedirect,
      logout: mockLogout,
    });

    render(<Authentication />);
    await user.click(screen.getByRole('button', { name: /log out/i }));
    
    expect(mockLogout).toHaveBeenCalledWith({
      logoutParams: { returnTo: expect.any(String) },
    });
  });
});
