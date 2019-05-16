import React from 'react';
import styles from './index.module.css';

const QuoteSubsection = () => {
  const { container, wrapper } = styles;
  return (
    <section className={container}>
      <div className={wrapper}>
        <blockquote>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet.
        </blockquote>
        <span>Elise Spear</span>
      </div>
    </section>
  )
}

export default QuoteSubsection
