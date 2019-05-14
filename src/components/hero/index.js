import React from 'react';
import styles from './index.module.css';

const Hero = () => {
  const { wrapper, layer, header, paragraph, button } = styles;
  return (
    <section id="Home" className={wrapper}>
      <div className={layer}></div>
      <h1 className={header}>
        HELLO WE'RE FROST
      </h1>
      <p className={paragraph}>
        DIGITAL & BRANDING AGENCY BASED IN NEVERLAND
      </p>
      <button className={button}>Get in touch</button>
    </section>
  )
}

export default Hero;
