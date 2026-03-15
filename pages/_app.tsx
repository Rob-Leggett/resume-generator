// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from 'next-themes';
import { ResumeDataProvider, ResumeThemeProvider } from '../src/contexts';
import { themeNames, defaultTheme } from '../themes/definitions';
import configuration from '../src/config/constants';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider 
      attribute="data-theme" 
      defaultTheme={defaultTheme} 
      themes={themeNames} 
      enableSystem={false}
    >
      <ResumeThemeProvider>
        <ResumeDataProvider>
          <Auth0Provider
            domain={configuration.auth0.domain}
            clientId={configuration.auth0.clientId}
            authorizationParams={{
              redirect_uri: typeof window !== 'undefined' ? window.location.origin : undefined,
              audience: configuration.auth0.audience,
              scope: configuration.auth0.scopes,
            }}
          >
            <Component {...pageProps} />
          </Auth0Provider>
        </ResumeDataProvider>
      </ResumeThemeProvider>
    </ThemeProvider>
  );
}