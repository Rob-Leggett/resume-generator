import React from 'react';
import { ThemeProvider } from 'next-themes'
import BannerComponent from './banner/BannerComponent';
import BodyComponent from './body/BodyComponent';
import PanelComponent from './panel/PanelComponent';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="modern" themes={["modern"]}>
      <div className="app-container">
        <div className="flex-container">
          <BannerComponent />
        </div>
        <div className="flex-container">
          <div className="left-panel">
            <BodyComponent />
          </div>
          <div className="right-panel">
            <PanelComponent />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;