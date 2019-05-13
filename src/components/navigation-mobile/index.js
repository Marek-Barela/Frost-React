import React from 'react';
import ListItem from '../navigation-list-item';
import styles from './index.module.css';

const Mobile = () => {
  const { list, button } = styles;
  return (
    <>
      <button className={button} aria-label="menu"></button>
      <ul className={list}>
        <ListItem to="#Home" text="Home" />
        <ListItem to="#Services" text="Services" />
        <ListItem to="#Portfolio" text="Portfolio" />
        <ListItem to="#About" text="About" />
        <ListItem to="#Pricing" text="Pricing" />
        <ListItem to="#Contact" text="Contact" />
        <ListItem to="#Features" text="Features" />
      </ul>
    </>
  )
}

export default Mobile;
