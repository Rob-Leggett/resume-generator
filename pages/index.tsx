// pages/index.tsx
import Authentication from '../components/Authentication/Authentication';
import Banner from '../components/Banner/Banner';
import Certifications from '../components/Certifications/Certifications';
import Panel from '../components/Panel/Panel';
import Profile from '../components/Profile/Profile';
import ThemeChanger from '../components/ThemeChanger/ThemeChanger';
import TemplateChanger from '../components/TemplateChanger/TemplateChanger';
import ExportPDF from '../components/ExportPDF/ExportPDF';
import Name from '../components/Name/Name';
import Summary from '../components/Summary/Summary';
import Experiences from '../components/Experiences/Experiences';
import Achievements from '../components/Achievements/Achievements';
import Skills from '../components/Skills/Skills';
import Education from '../components/Education/Education';

export default function Home() {
  return (
    <>
      <div className="flex-container">
        <Banner
          leftContent={
            <>
              <TemplateChanger />
              <ThemeChanger />
            </>
          }
          rightContent={
            <>
              <ExportPDF />
              <Authentication />
            </>
          }
        />
      </div>
      <div className="flex-container">
        <div className="left-panel">
          <Panel>
            <Name />
            <Summary />
            <Experiences />
          </Panel>
        </div>
        <div className="right-panel">
          <Panel>
            <Profile />
            <Certifications />
            <Achievements />
            <Skills />
            <Education />
          </Panel>
        </div>
      </div>
    </>
  );
}