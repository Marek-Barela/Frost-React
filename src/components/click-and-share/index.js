import React from 'react';
import styles from './index.module.css';

const ClickAndShare = () => {
  const { wrapper, header, separator,buttonContainer, facebook, twitter, pin } = styles;
  return (
    <section className={wrapper}>
      <h3 className={header}>CLICK <span>&</span> SHARE THE LOVE</h3>
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
