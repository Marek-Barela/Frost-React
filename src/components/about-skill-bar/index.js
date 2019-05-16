import React from 'react';
import styles from './index.module.css';

const AboutSkillBar = ({ name, procentage }) => {
  const { container, paragraph, bar, progress } = styles;
  return (
    <div className={container}>
      <p className={paragraph}>{name} <span>{procentage}</span></p>
      <div className={bar} >
        <div className={progress} style={{ width: procentage }}></div>
      </div>
    </div>
  )
}

export default AboutSkillBar
