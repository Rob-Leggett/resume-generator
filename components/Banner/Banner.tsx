import { ReactNode } from 'react';
import styles from './Banner.module.css';

interface BannerProps {
  children?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

const Banner = ({ children, leftContent, rightContent }: BannerProps) => {
  // If using the new left/right pattern
  if (leftContent || rightContent) {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.bannerLeft}>{leftContent}</div>
        <div className={styles.bannerRight}>{rightContent}</div>
      </div>
    );
  }

  // Legacy support for children
  return (
    <div className={styles.bannerContainer}>
      {children}
    </div>
  );
};

export default Banner;