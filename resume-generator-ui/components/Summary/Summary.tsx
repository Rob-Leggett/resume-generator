import styles from './Summary.module.css';
import { summary } from '../../src/config/content';
import { useAuth0, User } from '@auth0/auth0-react';

const Summary = () => {
  const { user, isLoading, error } = useAuth0<User>();

  if (isLoading) {
    return <div className="loading">Loading Summary</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  const renderSummaryData = (summary: string, index: number) => (
    <div key={index} className="summary-data">
      <p className="summary-item">{summary}</p>
    </div>
  );

  return (
    <div className={styles.summaryContainer}>
      <p className="summary-header">Summary</p>
      {user ? summary.map(renderSummaryData) : null}
    </div>
  );
};

export default Summary;