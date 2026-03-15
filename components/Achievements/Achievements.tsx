import { useAuth0, User } from '@auth0/auth0-react';
import { useResumeData } from '../../src/contexts';
import { AchievementData } from '../../src/types';
import styles from './Achievements.module.css';

const Achievements = () => {
  const { user, isLoading, error } = useAuth0<User>();
  const { data } = useResumeData();

  if (isLoading) {
    return <div className="loading">Loading Achievements</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  const renderAchievementData = (achievement: AchievementData, index: number) => (
    <div key={index} className="achievements-data">
      <p className="achievements-item"><strong>{achievement.name}</strong></p>
      <p className="achievements-item">{achievement.description}</p>
    </div>
  );

  return (
    <div className={styles.achievementsContainer}>
      <p className="achievements-header">Key Achievements</p>
      {user ? data.achievements.map(renderAchievementData) : null}
    </div>
  );
};

export default Achievements;