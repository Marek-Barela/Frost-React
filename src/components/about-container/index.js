import React from 'react';
import ContainerTop from '../about-container-top';
import ContainerBottom from '../about-container-bottom';
import styles from './index.module.css';

const AboutContainer = () => {
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <ContainerTop />
      <ContainerBottom />
    </div>
  )
}

export default AboutContainer;
