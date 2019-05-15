import React from 'react';
import ShareSectionHeader from '../buttons-section-header';
import styles from './index.module.css';

const ClickAndShare = () => {
  const { wrapper, separator, buttonContainer, facebook, twitter, pin } = styles;
  return (
    <section className={wrapper}>
      <ShareSectionHeader
        leftText="CLICK"
        rightText="SHARE THE LOVE"
      />
      <span className={separator}></span>
      <div className={buttonContainer}>
        <button className={facebook}>Like</button>
        <button className={twitter}>Tweet</button>
        <button className={pin}>Pin it</button>
      </div>
    </section>
  )
}

export default ClickAndShare;
