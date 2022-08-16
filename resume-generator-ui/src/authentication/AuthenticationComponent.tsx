import { useAuth0, User } from '@auth0/auth0-react';
import './Authentication.css';

const AuthenticationComponent = () => {
  const { user, isAuthenticated, isLoading, error, loginWithRedirect, logout } = useAuth0<User>();

  if (isLoading) {
    return (<div className="loading">Loading ...</div>);
  }

  if (error) {
    return (<div className="error">Oops... {error.message}</div>);
  }

  function loginProfile() {
    return (
      <div className="profile-container">
        <button className="button" onClick={loginWithRedirect}>Log in</button>
      </div>
    );
  }

  function logoutProfile() {
    return (
      <div className="profile-container">
        <span className="profile-msg">Hello {user ? user.name : 'User'}</span>
        <button className="button" onClick={() => logout({returnTo: window.location.origin})}>
          Log out
        </button>
      </div>
    );
  }

  return isAuthenticated ? logoutProfile() : loginProfile();
};

export default AuthenticationComponent;