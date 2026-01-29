import styles from './Summary.module.css';
import { useAuth0, User } from '@auth0/auth0-react';
import { useResumeData } from '../../src/contexts';

const Summary = () => {
  const { user, isLoading, error } = useAuth0<User>();
  const { data } = useResumeData();

  if (isLoading) {
    return <div className="loading">Loading Summary</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  const renderSummaryData = (summaryItem: string, index: number) => (
    <div key={index} className="summary-data">
      <p className="summary-item">{summaryItem}</p>
    </div>
  );

  return (
    <div className={styles.summaryContainer}>
      <p className="summary-header">Summary</p>
      {user ? data.summary.map(renderSummaryData) : null}
    </div>
  );
};

export default Summary;