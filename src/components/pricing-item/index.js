import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const PricingItem = ({ name, cost, time }) => {
  const { wrapper, contentWrapper, header, price, list, button } = styles;
  return (
    <div className={wrapper}>
      <div className={contentWrapper}>
        <h4 className={header}>{name}</h4>
        <span className={price}>{cost}</span>
        <ul className={list}>
          <li>{time}</li>
          <li>2GB Storage</li>
          <li>25 Users</li>
          <li>Unlimited Pages</li>
          <li>Enhanced Security</li>
        </ul>
        <button className={button}>
          Select Plan
        </button>
      </div>
    </div>
  )
}

PricingItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default PricingItem
