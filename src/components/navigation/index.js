import React, { Component } from 'react';
import NavigationDesktop from '../navigation-desktop';
import NavigationMobile from '../navigation-mobile';
import styles from './index.module.css';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      scrolledNav: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollPossition = window.scrollY;
    if (scrollPossition > 200) {
      // if state is already true don't set state again
      if (this.state.scrolledNav) return
      this.setState({
        scrolledNav: true
      })
    }
    else {
      this.setState({
        scrolledNav: false
      })
    }
  }


  render() {
    const { navigation, activeNavigation } = styles;
    const { scrolledNav } = this.state;
    const activeNav = scrolledNav ? activeNavigation : navigation;
    return (
      <nav className={activeNav}>
        <NavigationDesktop />
        <NavigationMobile />
      </nav>
    )
  }
}

export default Navigation;