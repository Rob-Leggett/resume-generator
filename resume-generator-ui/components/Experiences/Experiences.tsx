import styles from './Experiences.module.css';
import { ExperienceData, experiences } from '../../src/config/content';
import { useAuth0, User } from '@auth0/auth0-react';

const Experiences = () => {
  const { user, isLoading, error } = useAuth0<User>();

  if (isLoading) {
    return <div className="loading">Loading Experiences</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

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
      {user ? experiences.map(renderExperienceData) : null}
    </div>
  );
};

export default Experiences;