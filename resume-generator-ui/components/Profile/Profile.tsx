import { useEffect, useState } from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import configuration from '../../src/config/constants';
import styles from './Profile.module.css';

interface UserMetadata {
  mobile?: string;
  blog_url?: string;
  github_url?: string;
  linkedin_url?: string;
}

interface ProfileItem {
  label: string;
  value?: string;
}

const Profile = () => {
  const { user, isLoading, error, getAccessTokenSilently } = useAuth0<User>();
  const [userMetadata, setUserMetadata] = useState<UserMetadata | null>(null);

  useEffect(() => {
    const fetchUserMetadata = async () => {
      if (!user) return;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${configuration.auth0.domain}/api/v2/`,
            scope: configuration.auth0.scopes,
          },
        });

        const response = await fetch(`https://${configuration.auth0.domain}/api/v2/users/${user.sub}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const data = await response.json();
        setUserMetadata(data.user_metadata || {});
      } catch (err) {
        console.error('Failed to load user metadata', err);
      }
    };

    fetchUserMetadata();
  }, [getAccessTokenSilently, user]);

  const renderProfileData = ({ label, value }: ProfileItem) =>
    value ? (
      <div className="profile-data">
        <p className="profile-item">{label}</p>
        <p className="profile-item spacer">{value}</p>
      </div>
    ) : null;

  const renderProfileLink = ({ label, value }: ProfileItem) =>
    value ? (
      <div className="profile-data">
        <p className="profile-item">{label}</p>
        <a
          className="profile-link spacer"
          href={value}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      </div>
    ) : null;

  if (isLoading) return <div className="loading">Loading Profile</div>;
  if (error) return <div className="error">Oops... {error.message}</div>;
  if (!user) return null;

  return (
    <div className={styles.profileContainer}>
      {user.picture && (
        <img className="profile-img" src={user.picture} alt={user.name || 'Profile'} />
      )}
      <p className="profile-header">Contact</p>

      {renderProfileData({ label: 'Email:', value: user.email })}
      {renderProfileData({ label: 'Mobile:', value: userMetadata?.mobile })}
      {renderProfileLink({ label: 'Blog:', value: userMetadata?.blog_url })}
      {renderProfileLink({ label: 'GitHub:', value: userMetadata?.github_url })}
      {renderProfileLink({ label: 'LinkedIn:', value: userMetadata?.linkedin_url })}
    </div>
  );
};

export default Profile;