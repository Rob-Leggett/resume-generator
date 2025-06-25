import styles from './Skills.module.css';
import { skills } from '../../src/config/content';

const Skills = () => {
  const renderSkillData = (skill: string, index: number) => (
    <ul key={index} className="skills-data">
      <li className="skills-item">{skill}</li>
    </ul>
  );

  return (
    <div className={styles.skillsContainer}>
      <p className="skills-header">Skills</p>
      {skills.map(renderSkillData)}
    </div>
  );
};

export default Skills;