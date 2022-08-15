import React from 'react';
import ProfileComponent from '../profile/ProfileComponent';
import ThemeChangerComponent from '../theme/ThemeChangerComponent';

const BannerComponent = () => {
  return (
    <div className="flex-container banner-container">
      <ThemeChangerComponent/>
      <ProfileComponent />
    </div>
  )
}

export default BannerComponent;