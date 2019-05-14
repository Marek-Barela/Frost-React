import React from 'react';
import SectionHeader from '../section-header';
import styles from './styles.module.css';

const Services = () => {
  const { wrapper } = styles;
  return (
    <section id="Services" className={wrapper}>
      <SectionHeader
        headerText="HOW IT WORKS"
        paragraphText="WE'RE MAKING USEFUL THINGS SINCE 2008"
      />
    </section>
  )
}

export default Services;
