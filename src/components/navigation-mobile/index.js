import React, { Component } from 'react';
import ListItem from '../navigation-list-item';
import styles from './index.module.css';

class Mobile extends Component {
  state = {
    navIsOpen: false
  }

  switchNavbar() {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    })
  }

  render() {
    const { navIsOpen } = this.state;
    const { list, listOpen, listClose, button } = styles;
    const listStyles = navIsOpen ? `${list} ${listOpen}` : `${list} ${listClose}`
    return (
      <>
        <button
          className={button}
          aria-label="menu"
          onClick={() => this.switchNavbar()}
        >
        </button>
        <ul className={listStyles}>
          <ListItem to="#Home" text="Home" />
          <ListItem to="#Services" text="Services" />
          <ListItem to="#Portfolio" text="Portfolio" />
          <ListItem to="#About" text="About" />
          <ListItem to="#Pricing" text="Pricing" />
          <ListItem to="#Contact" text="Contact" />
        </ul>
      </>
    )
  }
}

export default Mobile;
