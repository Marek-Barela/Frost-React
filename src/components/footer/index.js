import React from 'react';
import styles from './index.module.css';

const Footer = () => {
  const { wrapper } = styles;
  return (
    <footer>
      <div className={wrapper}>
        © {new Date().getFullYear()} created by Marek Bareła
      </div>
    </footer>
  )
}

export default Footer;