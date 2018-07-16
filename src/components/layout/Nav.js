import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import SearchInput from './SearchInput';


export default class Nav extends Component {

  render() {
    return (
      <nav className={css(style.nav)}>
        <ul className={css(style.navUl)}>
          <Link to='/events' className={css(style.navItem) + ' animated fadeIn'}>Eventos</Link>
          <Link to='/venues' className={css(style.navItem) + ' animated fadeIn'}>Venues</Link>
          <Link to='/news' className={css(style.navItem) + ' animated fadeIn'}>News</Link>
          <Link to='/about' className={css(style.navItem) + ' animated fadeIn'}>Quienes Somos</Link>
          <Link to='/contact' className={css(style.navItem) + ' animated fadeIn'}>Contacto</Link>
        </ul>
        <div className={css(style.search)}>
          <SearchInput search={this.props.search} goBack={this.props.goBack}/>
        </div>
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
  },
  search: {
    "@media(max-width: 1024px)": {
      display: 'none'
    }
  }
})
