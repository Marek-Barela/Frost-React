import React from "react";
import Logo from '../logo';
import Navigation from '../navigation';
import styles from './index.module.css';

const Header = () => {
  const { header, wrapper } = styles;
  return (
    <header id="Home" className={header}>
      <div className={wrapper}>
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}

export default Header
