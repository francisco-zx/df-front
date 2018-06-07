import React, { Component } from 'react';
import Logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Nav from './Nav';
import MobileMenu from './MobileMenu';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMobileMenu: false
    }
  }
  toggleMobileMenu = () => {
    console.log('clickiti')
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    })
  }
  render() {
    return (
      <header className={css(style.header)}>
        <div className={css(style.mobileMenuIcon)+ ' clickable'} onClick={() => {this.toggleMobileMenu()}}>
          <i className='fa fa-bars fa-2x'></i>
        </div>
        <Link to='/' className={css(style.logoWrapper)}>
          <img src={Logo} className={css(style.logo) + ' animated fadeIn'} alt='Logo DF Entertainment'/>
        </Link>
        <Nav />
        <div className={css(style.mobileSearchIcon)}>
          <i className='fa fa-search fa-2x'></i>
        </div>
        {
          this.state.showMobileMenu &&
            <MobileMenu closeMenu={this.toggleMobileMenu}/>
        }
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
    },
    "@media(max-width: 480px)": {
      padding: '2rem',
    },
  },
  logo: {
    height: '4rem',
    width: 'auto',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    "@media(max-width: 996px)": {
      flex: 2,
    },
    "@media(max-width: 480px)": {
      height: '3rem',
    },
  },
  gradient: {
    width:'100%',
    height: '5px',
    background: '#d6249f',
    background: 'linear-gradient(to right at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
    boxShadow: '0px 3px 10px rgba(0,0,0,.25)'
  },
  mobileMenuIcon: {
    display: 'flex',
    flex: 1,
    "@media(min-width: 996px)": {
      display: 'none'
    }
  },
  mobileSearchIcon: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    "@media(min-width: 996px)": {
      display: 'none'
    }
  },
  mobileSearchIconIcon: {
    display: 'flex'
  }
})
