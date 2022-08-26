import { useState } from 'react';
import './Certification.css';

const CertificationComponent = () => {
  const [isLoading] = useState();

  if (isLoading) {
    return (<div className="loading">Loading ...</div>);
  }

  function retrieveCertifications() {
    return (<div className="certification-container"></div>)
  }

  return retrieveCertifications();
};

export default CertificationComponent;