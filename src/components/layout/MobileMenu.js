import React,  { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Logo from '../../logo.svg';
import NewsletterIcon from '../../assets/newsletter.svg'

export default class MobileMenu extends Component{
  render(){
    return(
      <article className={css(style.mobileMenu) + ' animated fadeIn'}>
        <nav className={css(style.mobileNav) + ' animated slideInLeft'}>
          <header className={css(style.header) + ' animated fadeIn'}>
            <img src={Logo} width='40%'/>
            <div className={css(style.closeMenu)+ ' clickable'} onClick={this.props.closeMenu}>
              <i className='fa fa-times fa-2x'></i>
            </div>
          </header>
          <ul className={css(style.mobileNavList)}>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.4s'}}>
              <NavLink
                to='/events'
                className={css(style.mobileNavItemLink)}
                onClick={this.props.closeMenu}>
                  Eventos
                </NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.5s'}}>
              <NavLink
                to='/venues'
                className={css(style.mobileNavItemLink)}
                onClick={this.props.closeMenu}>
                  Venues
              </NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.6s'}}>
              <NavLink
                to='/timeline'
                className={css(style.mobileNavItemLink)}
                onClick={this.props.closeMenu}>
                  Timeline
              </NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.7s'}}>
              <NavLink
                to='/blog'
                className={css(style.mobileNavItemLink)}
                onClick={this.props.closeMenu}>
                Blog
              </NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.8s'}}>
              <NavLink
                to='/about'
                className={css(style.mobileNavItemLink)}
                onClick={this.props.closeMenu}>
                  Quienes Somos
              </NavLink>
            </li>
            <li className={css(style.mobileNavItem) + ' animated fadeIn'} style={{animationDelay: '0.9s'}}>
              <NavLink
                to='/contact'
                className={css(style.mobileNavItemLink)}
                onClick={this.props.closeMenu}>
                  Contacto
              </NavLink>
            </li>

          </ul>
          <footer className={css(style.footer)} style={{borderBottom: '1px solid #c3c3c3'}}>
          <div className={css(style.bottomRight)} >
            <h3 className={css(style.bottomTitle) + ' animated fadeIn'}>Follow Us</h3>
            <ul className={css(style.iconGroup) + ' animated fadeIn'}>
              <li className={css(style.icon)}>
                <a href='https://www.facebook.com/dfallaccess/' target='_blank' className={css(style.iconLink) + ' animated fadeIn'} style={{animationDelay: '0.2s'}}>
                  <i className='fa fa-facebook'></i>
                </a>
              </li>
              <li className={css(style.icon)}>
                <a href='https://www.instagram.com/dfallaccess/?hl=es-la' target='_blank' className={css(style.iconLink) + ' animated fadeIn'} style={{animationDelay: '0.4s'}}>
                  <i className='fa fa-instagram'></i>
                </a>
              </li>
              <li className={css(style.icon)}>
                <a href='https://twitter.com/dfallaccess' target='_blank' className={css(style.iconLink) + ' animated fadeIn'} style={{animationDelay: '0.6s'}}>
                  <i className='fa fa-twitter'></i>
                </a>
              </li>
              <li className={css(style.icon)}>
                <a href='https://www.youtube.com/user/AllAccessMusicGroup' target='_blank' className={css(style.iconLink) + ' animated fadeIn'} style={{animationDelay: '0.8s'}}>
                  <i className='fa fa-youtube'></i>
                </a>
              </li>
            </ul>
          </div>
          </footer>
          <footer className={css(style.footer)}>
            <div className={css(style.bottomLeft) + ' animated fadeIn'}>
              <h3 className={css(style.bottomTitleLeft) + ' animated fadeIn'}>Suscribite a Nuestro Newsletter</h3>
              <div className={css(style.newsLetter) + ' animated fadeIn'}>
                <form>
                  <input type='email' name='email' className={css(style.input) + ' animated fadeIn'} placeholder='Ingresa tu Email'/>
                  <img src={NewsletterIcon} className={css(style.newsIcon) + ' animated fadeIn'} />
                </form>
              </div>
            </div>
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
    width: '100%',
    color: 'white',
    position: 'relative',
    padding: '0.6rem',
    paddingRight: 0,
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
    animationDelay: '0.6s',
    "@media(max-width: 480px)": {
      paddingRight: 0
    }
  }
})
