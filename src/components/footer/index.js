import React from 'react';
import styles from './index.module.css';

const Footer = () => {
  const { wrapper } = styles;
  return (
    <footer>
      <div className={wrapper}>
        © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer;