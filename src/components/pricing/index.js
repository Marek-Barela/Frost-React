import React from 'react';
import SectionHeader from '../section-header';
import PricingContainer from '../pricing-container';
import styles from './index.module.css';

const Pricing = () => {
  const { wrapper } = styles;
  return (
    <section id="Pricing">
      <div className={wrapper}>
        <SectionHeader 
          headerText="OUR PRICES"
          paragraphText="WE OFFER GREAT PRICES FOR YOUR BUSINESS"
        />
        <PricingContainer />
      </div>
    </section>
  )
}

export default Pricing
