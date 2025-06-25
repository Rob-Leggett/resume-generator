import styles from './Specialities.module.css';
import { specialities } from '../../src/config/content';

const Specialities = () => {
  const renderSpecialityData = (speciality: string, index: number) => (
    <ul key={index} className="specialities-data">
      <li className="specialities-item">{speciality}</li>
    </ul>
  );

  return (
    <div className={styles.specialitiesContainer}>
      <p className="specialities-header">Specialities</p>
      {specialities.map(renderSpecialityData)}
    </div>
  );
};

export default Specialities;