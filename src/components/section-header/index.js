import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const SectionHeader = ({ headerText, paragraphText }) => {
  const { wrapper, header, paragraph } = styles;
  return (
    <div className={wrapper}>
      <h2 className={header}>{headerText}</h2>
      <p className={paragraph}>{paragraphText}</p>
    </div>
  )
}

SectionHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired
}

export default SectionHeader
