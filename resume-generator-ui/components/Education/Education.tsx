import styles from './Education.module.css';
import { education, EducationData } from '../../src/config/content';

const Education = () => {
  const renderEducationData = (edu: EducationData) => (
    <div key={edu.name} className="education-data">
      <p className="education-item">{edu.name}</p>
      <p className="education-item">{edu.date}</p>
    </div>
  );

  return (
    <div className={styles.educationContainer}>
      <p className="education-header">Education</p>
      {education.map(renderEducationData)}
    </div>
  );
};

export default Education;