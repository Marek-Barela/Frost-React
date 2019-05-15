import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Header = ({ leftText, rightText }) => {
  const { header } = styles;
  return (
    <h3 className={header}>{leftText} <span>&</span>{rightText}</h3>
  )
}

Header.propTypes = {
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
}

export default Header
