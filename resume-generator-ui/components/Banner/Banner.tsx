import { ReactNode } from 'react';
import styles from './Banner.module.css';

interface BannerProps {
  children?: ReactNode;
}

const Banner = ({ children }: BannerProps) => {
  return (
    <div className={`flex-container ${styles.bannerContainer}`}>
      {children}
    </div>
  );
};

export default Banner;