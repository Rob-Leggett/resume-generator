import { ReactFCWithChildren } from '../react';
import './Banner.css';

const BannerComponent: ReactFCWithChildren = ({children}) => {
  return (
    <div className="flex-container banner-container">
      {children}
    </div>
  )
}

export default BannerComponent;