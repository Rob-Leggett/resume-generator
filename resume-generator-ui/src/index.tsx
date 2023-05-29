import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configuration from './constants';
import './Index.css';

const rootElement = document.getElementById("root")

// we have to do this, otherwise TypeScript will complain
if (!rootElement) throw new Error("Failed to find the root element")

// to use the new features need to hydrate root
const root = createRoot(rootElement);

root.render(
   <React.StrictMode>
     <Auth0Provider
       domain={configuration.auth0.domain}
       clientId={configuration.auth0.clientId}
       authorizationParams={{
         redirect_uri: window.location.origin,
         audience: configuration.auth0.audience,
         scope: configuration.auth0.scopes,
       }}
     >
      <App />
     </Auth0Provider>
   </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();