import { useAuth0, User } from '@auth0/auth0-react';
import './Name.css';

const NameComponent = () => {
  const { user, isLoading, error } = useAuth0<User>();

  if (isLoading) {
    return (<div className="loading">Loading ...</div>);
  }

  if (error) {
    return (<div className="error">Oops... {error.message}</div>);
  }

  function name() {
    return (
      <div className="name-container">
        <span className="name-msg">{user ? user.name : 'User'}</span>
      </div>
    );
  }

  return name();
};

export default NameComponent;