import { useEffect, useState } from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import configuration from '../constants';
import './Profile.css';

interface UserMetadata {
  mobile?: string,
  blog_url?: string,
  github_url?: string,
  linkedin_url?: string
}

const ProfileComponent = () => {
  const { user, isLoading, error, getAccessTokenSilently } = useAuth0<User>();
  const [userMetadata, setUserMetadata] = useState<UserMetadata>();

  useEffect(() => {
    const getUserMetadata = async () => {
      if (user) {
        const domain = configuration.auth0.domain;
        try {
          const accessToken = await getAccessTokenSilently({
            audience: `https://${domain}/api/v2/`,
            scope: configuration.auth0.scopes,
          });

          const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

          const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const {user_metadata} = await metadataResponse.json();

          setUserMetadata(user_metadata);
        } catch (e) {
          // TODO: set error
        }
      }
    }
    getUserMetadata();
  }, [getAccessTokenSilently, user]);

  if (isLoading) {
    return (<div className="loading">Loading ...</div>);
  }

  if (error) {
    return (<div className="error">Oops... {error.message}</div>);
  }

  function retrieveProfile() {
    if (user) {
      if (userMetadata) {
        return (
          <div>
            <img className="profile-img" src={user.picture} alt={user.name}/>
            <p>Email: {user.email}</p>
            <p>Mobile: {userMetadata.mobile}</p>
            <p>Blog: {userMetadata.blog_url}</p>
            <p>GitHub: {userMetadata.github_url}</p>
            <p>LinkedIn: {userMetadata.linkedin_url}</p>
          </div>
        );
      } else {
        return (
          <div>
            <img className="profile-img" src={user.picture} alt={user.name}/>
            <p>Email: {user.email}</p>
          </div>
        );
      }
    }

    return (<div></div>)
  }

  return retrieveProfile();
};

export default ProfileComponent;