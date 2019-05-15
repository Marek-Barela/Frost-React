import React from 'react';
import FeaturesItem from '../about-features-item';
import styles from './index.module.css';

const FeaturesContainer = () => {
  const { descriptionContainer, header } = styles;
  return (
    <div className={descriptionContainer}>
      <h4 className={header}>OUR FEATURED SERVICES</h4>

    </div>
  )
}

export default FeaturesContainer