import React,  { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Logo from '../../logo.svg';

export default class MobileMenu extends Component{
  render(){
    return(
      <article className={css(style.mobileMenu) + ' animated fadeIn'}>
        <nav className={css(style.mobileNav) + ' animated slideInLeft'}>
          <header className={css(style.header) + ' animated fadeIn'}>
            <img src={Logo} width='40%'/>
            <div className={css(style.closeMenu)} onClick={this.props.closeMenu}>
              <i className='fa fa-times fa-2x'></i>
            </div>
          </header>
          <ul className={css(style.mobileNavList)}>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.4s'}}>
              <NavLink to='/events'>Eventos</NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.5s'}}>
              <NavLink to='/venues'>Venues</NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.6s'}}>
              <NavLink to='/timeline'>Timeline</NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.7s'}}>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.8s'}}>
              <NavLink to='/about'>Quienes Somos</NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.9s'}}>
              <NavLink to='/contact'>Contacto</NavLink>
            </li>

          </ul>
          <footer className={css(style.footer)}>
          Hola
          </footer>
          <footer className={css(style.footer)}>
          Hola
          </footer>
        </nav>
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
  logo: {

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
    borderBottom: '1px solid #c3c3c3'
  },
  mobileNavItemLink: {
    color: '#161616',
    textTransform: 'uppercase',
    fontWeight: '100',
    textAlign: 'center',
    borderBottom: '1px solid #161616'
  },
  footer: {
    background: '#161616',
    flex: 2
  }
})
