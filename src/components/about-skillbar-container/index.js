import React from 'react';
import SkillBar from '../about-skill-bar';
import styles from './index.module.css';

const SkillBarContainer = () => {
  const { descriptionContainer, header } = styles;
  return (
    <div className={descriptionContainer}>
      <h4 className={header}>OUR SKILLS</h4>
      <p>
        Duis non lectus sit amet est imperdiet cursus elementum vitae eros. Etiam adipiscingmorbi vitae magna tellus, ac mattis urna phasellus rhoncus.
      </p>
      <SkillBar name="Photoshop" procentage="90%" />
      <SkillBar name="Final Cut" procentage="80%" />
      <SkillBar name="Studio Photography " procentage="85%" />
      <SkillBar name="Motion Video " procentage="75%" />
    </div>
  )
}

export default SkillBarContainer
