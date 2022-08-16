import { ThemeProvider } from 'next-themes'
import AuthenticationComponent from './authentication/AuthenticationComponent';
import BannerComponent from './banner/BannerComponent';
import PanelComponent from './panel/PanelComponent';
import ProfileComponent from './profile/ProfileComponent';
import ThemeChangerComponent from './theme/ThemeChangerComponent';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="modern" themes={["modern"]} enableSystem={false}>
      <div className="flex-container">
        <BannerComponent>
          <ThemeChangerComponent/>
          <AuthenticationComponent/>
        </BannerComponent>
      </div>
      <div className="flex-container">
        <div className="left-panel">
          <PanelComponent>

          </PanelComponent>
        </div>
        <div className="right-panel">
          <PanelComponent>
            <ProfileComponent />
          </PanelComponent>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;