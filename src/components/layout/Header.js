import React, { Component } from 'react';
import Logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Nav from './Nav';

export default class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      padding: '3rem 5rem'
    }
  }

  render() {
    return (
      <header className={css(style.header)}>
        <Link to='/' className={css(style.logoWrapper)}>
          <img src={Logo} className={css(style.logo) + ' animated fadeIn'} alt='Logo DF Entertainment'/>
        </Link>
        <Nav />
      </header>
    );
  }
}

const style = StyleSheet.create({
  header: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: '2rem 6rem',
    boxShadow: '0px 3px 15px 0px rgba(0,0,0,0.2)',
    "@media(max-width: 996px)": {
      justifyContent: 'center',
    }
  },
  logo: {
    height: '4rem',
    width: 'auto',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start'
  },
  gradient: {
    width:'100%',
    height: '5px',
    background: '#d6249f',
    background: 'linear-gradient(to right at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
    boxShadow: '0px 3px 10px rgba(0,0,0,.25)'
  }
})
