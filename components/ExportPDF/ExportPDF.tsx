import { useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './ExportPDF.module.css';

const ExportPDF = () => {
  const { user } = useAuth0();

  const handleExport = useCallback(() => {
    // Use the browser's print functionality which allows saving as PDF
    window.print();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.exportContainer}>
      <button className="button export-button" onClick={handleExport}>
        Export PDF
      </button>
    </div>
  );
};

export default ExportPDF;
