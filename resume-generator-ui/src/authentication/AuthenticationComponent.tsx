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

  function loginUser() {
    return (
      <div className="authentication-container">
        <button className="button" onClick={loginWithRedirect}>Log in</button>
      </div>
    );
  }

  function logoutUser() {
    return (
      <div className="authentication-container">
        <span className="authentication-msg">Hello {user ? user.name : 'User'}</span>
        <button className="button" onClick={() => logout({returnTo: window.location.origin})}>
          Log out
        </button>
      </div>
    );
  }

  return isAuthenticated ? logoutUser() : loginUser();
};

export default AuthenticationComponent;