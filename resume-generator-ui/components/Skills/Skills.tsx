import styles from './Skills.module.css';
import { SkillData, skills } from '../../src/config/content';
import { useAuth0, User } from '@auth0/auth0-react';

const Skills = () => {
  const { user, isLoading, error } = useAuth0<User>();

  if (isLoading) {
    return <div className="loading">Loading Skills</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  const renderSkillData = (skill: SkillData, index: number) => (
    <div key={index} className="skills-data">
      <p className="skills-item"><strong>{skill.type}</strong></p>
      <p className="skills-item">{skill.description}</p>
    </div>
  );

  return (
    <div className={styles.skillsContainer}>
      <p className="skills-header">Skills</p>
      {user ? skills.map(renderSkillData) : null}
    </div>
  );
};

export default Skills;