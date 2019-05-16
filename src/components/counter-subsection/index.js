import React from 'react';
import CounterItem from '../counter-item';
import { faMobileAlt, faMugHot, faVideo, faMedal } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

const CounterSubsection = () => {
  const { container, wrapper } = styles;
  return (
    <section className={container}>
      <div className={wrapper}>
        <CounterItem
          amount="7518"
          innerText="SHOTS TAKEN"
          icon={faMobileAlt}
        />
        <CounterItem
          amount="3472"
          innerText="CUPS OF COFFEE"
          icon={faMugHot}
        />
        <CounterItem
          amount="2184"
          innerText="MOVIES WATCHED"
          icon={faVideo}
        />
        <CounterItem
          amount="4523"
          innerText="AWARDS WON"
          icon={faMedal}
        />
      </div>
    </section>
  )
}

export default CounterSubsection
