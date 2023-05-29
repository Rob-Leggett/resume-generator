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

interface Profile {
  label: string,
  value: string | undefined
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
              authorizationParams: {
                audience: `https://${domain}/api/v2/`,
                scope: configuration.auth0.scopes,
              }
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

  const addProfileData = (profile: Profile) => {
    return (
    <div className="profile-data">
      <p className="profile-item">{profile.label}</p>
      <p className="profile-item spacer">{profile.value}</p>
    </div>
    );
  }

  const addProfileLink = (profile: Profile) => {
    return (
      <div className="profile-data">
        <p className="profile-item">{profile.label}</p>
        <a className="profile-link spacer" href={profile.value}>{profile.value}</a>
      </div>
    );
  }

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
          <div className="profile-container">
            <img className="profile-img" src={user.picture} alt={user.name}/>

            <p className="profile-header">Contact</p>

            { addProfileData({label: "Email:", value: user.email}) }

            { addProfileData({label: "Mobile:", value: userMetadata.mobile}) }

            { addProfileLink({label: "Blog:", value: userMetadata.blog_url}) }

            { addProfileLink({label: "GitHub:", value: userMetadata.github_url}) }

            { addProfileLink({label: "LinkedIn:", value: userMetadata.linkedin_url}) }

          </div>
        );
      } else {
        return (
          <div className="profile-container">
            <img className="profile-img" src={user.picture} alt={user.name}/>

            <p className="profile-header">Contact</p>

            { addProfileData({label: "Email:", value: user.email}) }

          </div>
        );
      }
    }

    return (<div className="profile-container"></div>)
  }

  return retrieveProfile();
};

export default ProfileComponent;