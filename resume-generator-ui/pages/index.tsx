// pages/index.tsx
import Authentication from '../components/authentication/Authentication';
import Banner from '../components/Banner/Banner';
import Certification from '../components/Certification/Certification';
import Panel from '../components/Panel/Panel';
import Profile from '../components/Profile/Profile';
import ThemeChanger from '../components/ThemeChanger/ThemeChanger';
import Name from '../components/Name/Name';

export default function Home() {
  return (
    <>
      <div className="flex-container">
        <Banner>
          <ThemeChanger />
          <Authentication />
        </Banner>
      </div>
      <div className="flex-container">
        <div className="left-panel">
          <Panel>
            <Name />
          </Panel>
        </div>
        <div className="right-panel">
          <Panel>
            <Profile />
            <Certification />
          </Panel>
        </div>
      </div>
    </>
  );
}