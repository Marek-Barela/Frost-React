import React from 'react'
import SectionHeader from '../section-header';
import AboutContainer from '../about-container';
import styles from './index.module.css';

const About = () => {
  const { wrapper } = styles;
  return (
    <section id="About">
      <div className={wrapper}>
        <SectionHeader
          headerText="ABOUT THE COMPANY"
          paragraphText="A CREATIVE AGENCY TURNING IDEAS INTO BEAUTIFUL THINGS"
        />
        <AboutContainer />
      </div>
    </section>
  )
}

export default About
