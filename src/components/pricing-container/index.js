import React from 'react';
import PricingItem from '../pricing-item';
import styles from './index.module.css';

const PricingContainer = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <PricingItem
        name="Bronze"
        cost="3"
        time="3 Days"
      />
      <PricingItem
        name="Silver"
        cost="10"
        time="7 Days"
      />
      <PricingItem
        name="Gold"
        cost="20"
        time="30 Days"
      />
      <PricingItem
        name="Platinum"
        cost="30"
        time="120 Days"
      />
    </div>
  )
}

export default PricingContainer
