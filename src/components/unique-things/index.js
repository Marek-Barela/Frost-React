import React from 'react'
import SectionHeader from '../buttons-section-header';
import styles from './index.module.css';

const UniqueThings = () => {
  const { wrapper, button } = styles;
  return (
    <section>
      <div className={wrapper}>
        <SectionHeader
          leftText="WE CREATE UNIQUE"
          rightText="GORGEOUS THINGS"
        />
        <button className={button}>
          Let's work together
        </button>
      </div>
    </section>
  )
}

export default UniqueThings
