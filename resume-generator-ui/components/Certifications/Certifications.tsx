import styles from './Certifications.module.css';
import { CertificationData, certifications } from '../../src/config/content';

const Certifications = () => {
  const renderCertificationData = (cert: CertificationData) => (
    <div key={cert.name} className="certification-data">
      <p className="certification-item"><strong>{cert.name}</strong></p>
      <p className="certification-item">{cert.date}</p>
      <a
        className="certification-item certification-link"
        href={cert.badgeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >View Badge</a>
    </div>
  );

  return (
    <div className={styles.certificationsContainer}>
      <p className="certification-header">Certifications</p>
      {certifications.map(renderCertificationData)}
    </div>
  );
};

export default Certifications;