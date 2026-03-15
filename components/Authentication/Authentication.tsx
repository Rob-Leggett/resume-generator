import { useAuth0, User } from '@auth0/auth0-react';
import styles from './Authentication.module.css';

const Authentication = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    error,
    loginWithRedirect,
    logout,
  } = useAuth0<User>();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  return (
    <div className={styles.authenticationContainer}>
      {isAuthenticated ? (
        <>
          <span className="authentication-msg">Hello {user?.name || 'User'}</span>
          <button
            className="button"
            onClick={() =>
              logout({
                logoutParams: { returnTo: window.location.origin },
              })
            }
          >
            Log out
          </button>
        </>
      ) : (
        <button className="button" onClick={() => loginWithRedirect()}>
          Log in
        </button>
      )}
    </div>
  );
};

export default Authentication;