import { ReactNode } from 'react';
import styles from './Panel.module.css'; // ✅ correct module import

interface PanelProps {
  children?: ReactNode;
  className?: string;
}

const Panel = ({ children, className = '' }: PanelProps) => {
  return (
    <div className={`${styles.panelContainer} ${className}`}>
      {children}
    </div>
  );
};

export default Panel;