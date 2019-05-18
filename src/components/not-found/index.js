import React from 'react';
import styles from './index.module.css';

const NotFound = () => {
  const { wrapper } = styles;
  return (
    <section className={wrapper}>
      <h1>404 Not Found</h1>
    </section>
  )
}

export default NotFound
