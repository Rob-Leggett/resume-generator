import { ThemeProvider } from 'next-themes'
import AuthenticationComponent from './authentication/AuthenticationComponent';
import BannerComponent from './banner/BannerComponent';
import CertificationComponent from './certification/CertificationComponent';
import PanelComponent from './panel/PanelComponent';
import ProfileComponent from './profile/ProfileComponent';
import ThemeChangerComponent from './theme/ThemeChangerComponent';
import './App.css';
import NameComponent from './name/NameComponent';

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
            <NameComponent />
          </PanelComponent>
        </div>
        <div className="right-panel">
          <PanelComponent>
            <ProfileComponent />
            <CertificationComponent />
          </PanelComponent>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;