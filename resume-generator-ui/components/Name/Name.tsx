import { useAuth0, User } from '@auth0/auth0-react';
import styles from './Name.module.css';

const Name = () => {
  const { user, isLoading, error } = useAuth0<User>();

  if (isLoading) {
    return <div className="loading">Loading Name</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  return (
    <div className={styles.nameContainer}>
      <span className="name-msg">{user?.name || 'User'}</span>
    </div>
  );
};

export default Name;