import styles from './Summary.module.css';
import { summary } from '../../src/config/content';

const Summary = () => {
  const renderSummaryData = (summary: string, index: number) => (
    <div key={index} className="summary-data">
      <p className="summary-item">{summary}</p>
    </div>
  );

  return (
    <div className={styles.summaryContainer}>
      <p className="summary-header">Summary</p>
      {summary.map(renderSummaryData)}
    </div>
  );
};

export default Summary;