import styles from './Experiences.module.css';
import { ExperienceData, experiences } from '../../src/config/content';

const Experiences = () => {
  const renderDescriptionData = (desc: string, index: number) => (
    <ul key={index} className="experiences-description-data">
      <li className="experiences-item">{desc}</li>
    </ul>
  );

  const renderExperienceData = (exp: ExperienceData) => (
    <div key={exp.role} className="experiences-data">
      <p className="experiences-item-header">{exp.role} ({exp.period}) - {exp.company}</p>
      {exp.description.map(renderDescriptionData)}
    </div>
  );

  return (
    <div className={styles.experiencesContainer}>
      <p className="experiences-header">Experiences</p>
      {experiences.map(renderExperienceData)}
    </div>
  );
};

export default Experiences;