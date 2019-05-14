import React from 'react';
import Favicon from '../favicon';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const ServicesItem = ({ icon, headerText, paragraphText }) => {
  const { wrapper, separator, header, paragraph } = styles;
  return (
    <div className={wrapper}>
      <Favicon
        icon={icon}
        size="2x"
      />
      <span className={separator}></span>
      <h3 className={header}>
        {headerText}
      </h3>
      <p className={paragraph}>
        {paragraphText}
      </p>
    </div>
  )
}

ServicesItem.propTypes = {
  icon: PropTypes.object.isRequired,
  headerText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired
}

export default ServicesItem
