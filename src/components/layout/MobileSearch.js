import React,  { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Logo from '../../logo.svg';
import SearchInput from './SearchInput';
import TopBar from './TopBar';

export default class MobileMenu extends Component{
  render(){
    return(
      <article className={css(style.mobileMenu) + ' animated fadeIn'}>
          <TopBar />
          <header className={css(style.header) + ' animated fadeIn'}>
            <div className={css(style.logoWrapper)} onClick={this.props.closeSearch}>
              <img src={Logo} width='100%'/>
            </div>
            <div className={css(style.search)}>
              <SearchInput />
            </div>
          </header>
      </article>
    )
  }
}
const style = StyleSheet.create({
  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 666,
    background: 'rgba(256,256,256,0.6)',

  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    height: '100%',
    width: '75vw',
    animationDelay: '0.3s',
    webkitBoxShadow: '10px 0px 28px 0px rgba(0,0,0,0.19)',
    mozBoxShadow: '10px 0px 28px 0px rgba(0,0,0,0.19)',
    boxShadow: '10px 0px 28px 0px rgba(0,0,0,0.19)'
  },
  header: {
    display: 'flex',
    flex: 1,
    padding: '0.5rem',
    background: 'white',
    position: 'relative',
    animationDelay: '0.4s',
    webkitBoxShadow: '0px 2px 28px 0px rgba(0,0,0,0.19)',
    mozBoxShadow: '0px 2px 28px 0px rgba(0,0,0,0.19)',
    boxShadow: '0px 2px 28px 0px rgba(0,0,0,0.19)',
    justifyContent: 'center'
  },
  closeMenu: {
    color: '#161616',
    position: 'absolute',
    left: 0,
    paddingLeft: '2rem',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  logoWrapper: {
    display: 'flex',
    flex: 1
  },
  mobileNavList: {
    display: 'flex',
    flexDirection: 'column',
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mobileNavItem: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    color: '#161616',
    textTransform: 'uppercase',
    fontWeight: '100',
    justifyContent: 'center',
    borderBottom: '1px solid #c3c3c3',
    textDecoration: 'none'
  },
  mobileNavItemLink: {
    color: '#161616',
    textTransform: 'uppercase',
    fontWeight: '100',
    textAlign: 'center',
  },
  footer: {
    background: '#161616',
    flex: 2,
    alignItems: 'center',
  },
  bottomLeft: {
    display:'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: '2rem',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  bottomTitleLeft: {
    display: 'flex',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
    justifyContent: 'center',
    marginBottom: '1rem',
    fontSize:'0.8rem',
  },
  input: {
    background: 'transparent',
    border: '1px solid white',
    borderRadius: '50px',
    width: '15rem',
    color: 'white',
    position: 'relative',
    padding: '0.6rem',
    ":focus": {
      borderRadius: '50px',
    }
  },
  bottomRight: {
    display:'flex',
    flex: 1,
    margin: 'auto',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '2rem'
  },
  bottomTitle: {
    display: 'flex',
    color: 'white',
    fontSize:'0.8rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
    justifyContent: 'flex-end',
    marginBottom: '1rem'
  },
  iconGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white'
  },
  icon: {
    paddingLeft: '1rem',
    fontSize: '1.3rem',
    animationDelay: '0.4s'
  },
  iconLink: {
    color: 'white'
  },
  newsLetter: {
    position: 'relative',
    width: 'auto',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    animationDelay: '0.3s',
    maxWidth: '100%'
  },
  newsIcon: {
    width: '1.5rem',
    position: 'absolute',
    right: 0,
    paddingRight: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    animationDelay: '0.6s'
  },
  search: {
    display: 'flex',
    flex: 2 ,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})
