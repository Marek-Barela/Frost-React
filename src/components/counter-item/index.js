import React from 'react';
import Favicon from '../favicon';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const CounterItem = ({ icon, amount, innerText }) => {
  const { wrapper, header, text } = styles;
  return (
    <div className={wrapper}>
      <Favicon icon={icon} size="2x" />
      <h5 className={header}>{amount}</h5>
      <span className={text}>{innerText}</span>
    </div>
  )
}

CounterItem.propTypes = {
  icon: PropTypes.object.isRequired,
  amount: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired
}

export default CounterItem
