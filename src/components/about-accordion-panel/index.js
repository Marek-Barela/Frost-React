import React, { Component } from 'react';
import styles from './index.module.css';

class Accordion extends Component {
  state = {
    accordionIsOpen: false
  }

  switchAccordion = () => {
    this.setState({
      accordionIsOpen: !this.state.accordionIsOpen
    })
  }

  render() {
    const { accordion, button, hidden, visible } = styles;
    const { name, text } = this.props;
    const { accordionIsOpen } = this.state;
    const contentOpen = accordionIsOpen && visible;
    return (
      <div className={accordion}>
        <button
          className={button}
          onClick={() => this.switchAccordion()}
        >
          {name}
        </button>
        <p className={`${hidden} ${contentOpen}`}>
          {text}
        </p>
      </div>
    )
  }
}

export default Accordion
