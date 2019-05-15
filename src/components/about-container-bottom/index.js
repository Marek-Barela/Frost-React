import React from 'react';
import SkillBarContainer from '../about-skillbar-container';
import AccordionContainer from '../about-accordion-container';
import FeatureContainer from '../about-features-container';
import styles from './index.module.css';

const ContainerBottom = () => {
  const { descriptionContainerBottom } = styles;
  return (
    <div className={descriptionContainerBottom}>
      <SkillBarContainer />
      <AccordionContainer />
      <FeatureContainer />
    </div>
  )
}

export default ContainerBottom
