import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import SearchInput from './SearchInput';


export default class Nav extends Component {

  render() {
    return (
      <nav className={css(style.nav)}>
        <ul className={css(style.navUl)}>
          <Link to='/events' className={css(style.navItem)}>Eventos</Link>
          <Link to='/venues' className={css(style.navItem)}>Venues</Link>
          <Link to='/timeline' className={css(style.navItem)}>Timeline</Link>
          <Link to='/blog' className={css(style.navItem)}>Blog</Link>
          <Link to='/about' className={css(style.navItem)}>Quienes Somos</Link>
          <Link to='/contact' className={css(style.navItem)}>Contacto</Link>
        </ul>
        <SearchInput />
      </nav>
    );
  }
}

const style = StyleSheet.create({
  nav: {
    display: 'flex',
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    "@media(max-width: 996px)": {
      display: 'none',
    }
  },
  navUl: {
    flex: 1
  },
  navItem: {
    textTransform: 'uppercase',
    color: 'black',
    textDecoration: 'none',
    padding: '0.5rem',
    letterSpacing: '1px',
    "@media(max-width: 1160px)": {
      padding: '0.2rem',
      fontSize: '0.9rem'
    },
    "@media(max-width: 1024px)": {
      padding: '0.2rem',
      fontSize: '0.9rem'
    }
  }
})
