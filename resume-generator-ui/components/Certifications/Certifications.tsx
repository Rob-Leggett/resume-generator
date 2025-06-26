import styles from './Certifications.module.css';
import { CertificationData, certifications } from '../../src/config/content';
import { useAuth0, User } from '@auth0/auth0-react';

const Certifications = () => {
  const { user, isLoading, error } = useAuth0<User>();

  if (isLoading) {
    return <div className="loading">Loading Certifications</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  const renderCertificationData = (cert: CertificationData) => (
    <div key={cert.name} className="certification-data">
      <p className="certification-item"><strong>{cert.name}</strong></p>
      <p className="certification-item">{cert.date}</p>
      <p className="certification-item">
        <a className="certification-link"
          href={cert.badgeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >View Badge</a>
      </p>
    </div>
  );

  return (
    <div className={styles.certificationsContainer}>
      <p className="certification-header">Certifications</p>
      {user ? certifications.map(renderCertificationData) : null}
    </div>
  );
};

export default Certifications;