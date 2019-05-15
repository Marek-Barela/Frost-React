import React from 'react';
import SkillBar from '../about-skill-bar';
import styles from './index.module.css';

const ContainerBottom = () => {
  const { descriptionContainerBottom, descriptionContainer } = styles;
  return (
    <div className={descriptionContainerBottom}>
      <div className={descriptionContainer}>
        <h4>OUR SKILLS</h4>
        <p>
          Duis non lectus sit amet est imperdiet cursus elementum vitae eros. Etiam adipiscingmorbi vitae magna tellus, ac mattis urna phasellus rhoncus.
        </p>
        <SkillBar name="Photoshop" procentage="90%" />
        <SkillBar name="Final Cut" procentage="80%" />
        <SkillBar name="Studio Photography " procentage="85%" />
        <SkillBar name="Motion Video " procentage="75%" />
      </div>
      <div className={descriptionContainer}>
        <h4>WHY CHOOSE US?</h4>

      </div>
      <div className={descriptionContainer}>
        <h4>OUR FEATURED SERVICES</h4>

      </div>
    </div>
  )
}

export default ContainerBottom
