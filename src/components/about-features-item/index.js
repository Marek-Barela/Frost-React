import React from 'react';
import Favicon from '../favicon';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const FeaturesItem = ({ icon, headerText, paragraphText }) => {
  const { wrapper, textWrapper, header, paragraph } = styles;
  return (
    <div className={wrapper}>
      <Favicon icon={icon} size="2x" />
      <div className={textWrapper}>
        <h5 className={header}>{headerText}</h5>
        <p className={paragraph}>
          {paragraphText}
        </p>
      </div>
    </div>
  )
}

FeaturesItem.propTypes = {
  icon: PropTypes.object.isRequired,
  headerText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired
}

export default FeaturesItem
