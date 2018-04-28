import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchInput from './SearchInput';


export default class Nav extends Component {

  render() {
    return (
      <nav style={style.nav}>
        <ul>
          <Link to='/events' style={style.navItem}>Eventos</Link>
          <Link to='/venues' style={style.navItem}>Venues</Link>
          <Link to='/timeline' style={style.navItem}>Timeline</Link>
          <Link to='/blog' style={style.navItem}>Blog</Link>
          <Link to='/about' style={style.navItem}>Quienes Somos</Link>
          <Link to='/contact' style={style.navItem}>Contacto</Link>
        </ul>
        <SearchInput />
      </nav>
    );
  }
}

const style = {
  nav: {
    display: 'flex',
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  navItem: {
    textTransform: 'uppercase',
    color: 'black',
    textDecoration: 'none',
    paddingRight: '4rem',
    letterSpacing: '3px'
  }
}
