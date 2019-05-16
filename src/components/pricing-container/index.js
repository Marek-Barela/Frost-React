import React from 'react';
import PricingItem from '../pricing-item';
import styles from './index.module.css';

const PricingContainer = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <PricingItem />
      <PricingItem />
      <PricingItem />
      <PricingItem />
    </div>
  )
}

export default PricingContainer
