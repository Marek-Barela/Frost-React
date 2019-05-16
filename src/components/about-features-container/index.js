import React from 'react';
import FeaturesItem from '../about-features-item';
import { faCameraRetro, faFilm, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

const FeaturesContainer = () => {
  const { descriptionContainer, header } = styles;
  return (
    <div className={descriptionContainer}>
      <h4 className={header}>OUR FEATURED SERVICES</h4>
      <FeaturesItem
        icon={faCameraRetro}
        headerText="PHOTOGRAPHY"
        paragraphText="Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non."
      />
      <FeaturesItem
        icon={faFilm}
        headerText="MOTION VIDEO"
        paragraphText="Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non."
      />
      <FeaturesItem
        icon={faHeadphonesAlt}
        headerText="SOUND DESIGN"
        paragraphText="Nulla vitae libero, a pharetra augue. Integer posuere a ante venenatis condimentum. Donec id elit non."
      />
    </div>
  )
}

export default FeaturesContainer