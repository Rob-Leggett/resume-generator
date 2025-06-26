import styles from './Education.module.css';
import { education, EducationData } from '../../src/config/content';
import { useAuth0, User } from '@auth0/auth0-react';

const Education = () => {
  const { user, isLoading, error } = useAuth0<User>();

  if (isLoading) {
    return <div className="loading">Loading Education</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  const renderEducationData = (edu: EducationData) => (
    <div key={edu.name} className="education-data">
      <p className="education-item"><strong>{edu.school}</strong></p>
      <p className="education-item">{edu.name}</p>
      <p className="education-item">{edu.date}</p>
    </div>
  );

  return (
    <div className={styles.educationContainer}>
      <p className="education-header">Education</p>
      {user ? education.map(renderEducationData): null}
    </div>
  );
};

export default Education;