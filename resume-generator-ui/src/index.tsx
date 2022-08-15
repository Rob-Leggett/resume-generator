import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Index.css';

const rootElement = document.getElementById("root")

// we have to do this, otherwise TypeScript will complain
if (!rootElement) throw new Error("Failed to find the root element")

// to use the new features need to hydrate root
const root = createRoot(rootElement);

root.render(
   <React.StrictMode>
     <Auth0Provider
       domain="YOUR_DOMAIN"
       clientId="YOUR_CLIENT_ID"
       redirectUri={window.location.origin}
     >
      <App />
     </Auth0Provider>
   </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();