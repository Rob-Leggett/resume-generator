import React from "react";
import { useAuth0, User } from '@auth0/auth0-react';
import './Profile.css';

const ProfileComponent = () => {
  const { user, isAuthenticated, isLoading, error, loginWithRedirect, logout } = useAuth0<User>();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="profile-container">
        <span className="profile-msg">Hello {user ? user.name : 'User'}</span>
        <button className="button" onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  }
  else {
    return (
      <div className="profile-container">
        <button className="button" onClick={loginWithRedirect}>Log in</button>
      </div>
    );
  }
};

export default ProfileComponent;