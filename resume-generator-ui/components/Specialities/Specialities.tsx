import styles from './Specialities.module.css';
import { specialities } from '../../src/config/content';
import { useAuth0, User } from '@auth0/auth0-react';

const Specialities = () => {
  const { user, isLoading, error } = useAuth0<User>();

  if (isLoading) {
    return <div className="loading">Loading Specialities</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  const renderSpecialityData = (speciality: string, index: number) => (
    <ul key={index} className="specialities-data">
      <li className="specialities-item">{speciality}</li>
    </ul>
  );

  return (
    <div className={styles.specialitiesContainer}>
      <p className="specialities-header">Specialities</p>
      {user ? specialities.map(renderSpecialityData) : null}
    </div>
  );
};

export default Specialities;