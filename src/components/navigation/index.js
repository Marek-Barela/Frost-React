import React from 'react';
import NavigationDesktop from '../navigation-desktop';
import NavigationMobile from '../navigation-mobile';
import styles from './index.module.css';

const Navigation = () => {
  const { navigation } = styles;
  return (
    <nav className={navigation}>
      <NavigationDesktop />
      <NavigationMobile />
    </nav>
  )
}

export default Navigation;