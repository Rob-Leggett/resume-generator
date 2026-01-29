import React, { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ResumeDataProvider, ResumeThemeProvider } from '../../src/contexts';

// Mock Auth0 hook
export const mockAuth0User = {
  name: 'Test User',
  email: 'test@example.com',
  picture: 'https://example.com/avatar.jpg',
  sub: 'auth0|123456',
};

export const mockAuth0 = {
  isAuthenticated: true,
  isLoading: false,
  user: mockAuth0User,
  error: undefined,
  loginWithRedirect: jest.fn(),
  logout: jest.fn(),
  getAccessTokenSilently: jest.fn(),
};

export const mockAuth0Loading = {
  ...mockAuth0,
  isLoading: true,
  user: undefined,
};

export const mockAuth0Unauthenticated = {
  ...mockAuth0,
  isAuthenticated: false,
  user: undefined,
};

export const mockAuth0Error = {
  ...mockAuth0,
  error: new Error('Auth0 error'),
  user: undefined,
};

// Mock useAuth0 for different states
export function mockUseAuth0(state: typeof mockAuth0 = mockAuth0) {
  jest.mock('@auth0/auth0-react', () => ({
    useAuth0: () => state,
    Auth0Provider: ({ children }: { children: ReactNode }) => children,
  }));
}

// Custom render with providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialTemplate?: string;
}

function AllProviders({ children }: { children: ReactNode }) {
  return (
    <ResumeThemeProvider>
      <ResumeDataProvider>
        {children}
      </ResumeDataProvider>
    </ResumeThemeProvider>
  );
}

export function renderWithProviders(
  ui: React.ReactElement,
  options?: CustomRenderOptions
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

// Re-export testing library utilities
export * from '@testing-library/react';
export { renderWithProviders as render };
