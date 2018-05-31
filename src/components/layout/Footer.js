import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import BorderGradient  from './BorderGradient';
import { arrowRightIcon } from "../../assets/IconsSvg";
import NewsletterIcon from '../../assets/newsletter.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer className={css(style.footer)}>
        <article className={css(style.footerTop)}>
          <div className={css(style.topLeft) + ' animated fadeIn'}>Mas de DF Entertainment</div>
          <div className={css(style.topRight) + ' animated fadeIn'}><i className='fa fa-caret-right'></i></div>
        </article>
        <BorderGradient />
        <article className={css(style.footerBottom)}>
          <div className={css(style.bottomLeft) + ' animated fadeIn'}>
            <h3 className={css(style.bottomTitleLeft) + ' animated fadeIn'}>Suscribite a Nuestro Newsletter</h3>
            <div className={css(style.newsLetter) + ' animated fadeIn'}>
              <input type='text' className={css(style.input) + ' animated fadeIn'} placeholder='Ingresa tu Email'/>
              <img src={NewsletterIcon} className={css(style.newsIcon) + ' animated fadeIn'} />
            </div>
          </div>
          <div className={css(style.bottomRight)}>
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
        </article>
        <article className={css(style.footerEnd)}>
          <p>© 2018 Df entertainment | Website by <a href='http://www.wemakepogo.com' className={css(style.footerLink)} target='_blank'>POGO</a></p>
        </article>
      </footer>
    );
  }
}

const style = StyleSheet.create({
  footer: {
    background: '#161616',
    fontFamily: 'Avenir'
  },
  footerTop: {
    padding: '1rem 5rem',
    display: 'flex',
    color: 'white',
    justifyContent: 'flex-end',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: '0.7rem',
    letterSpacing: '1px',
    "@media(max-width: 1024px)": {
      padding: '2rem',
      justifyContent: 'center'
    },
    "@media(max-width: 480px)": {
      padding: '1rem'
    }
  },
  topLeft: {
    borderRight: '1px solid white',
    paddingRight: '1rem',
    textAlign: 'right'
  },
  topRight: {
    display:'flex',
    justifyContent: 'flex-start',
    paddingLeft: '1rem',
    animationDelay: '0.3s'
  },
  footerBottom: {
    padding: '3rem 5rem',
    display: 'flex',
    flex: 1,
    "@media(max-width: 1024px)": {
      flexDirection: 'column-reverse',
    }
  },
  bottomLeft: {
    display:'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    "@media(max-width: 1024px)": {
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '2rem'
    }
  },
  bottomRight: {
    display:'flex',
    flex: 1,
    flexDirection: 'column',
    "@media(max-width: 1024px)": {
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '2rem'
    }
  },
  bottomTitle: {
    display: 'flex',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
    justifyContent: 'flex-end',
    marginBottom: '1rem'
  },
  bottomTitleLeft: {
    display: 'flex',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
    justifyContent: 'flex-start',
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
  footerEnd: {
    display:'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '0.8rem'
  },
  footerLink: {
    color: 'white',
    fontWeight: 'bold'
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
  newsLetter: {
    position: 'relative',
    width: 'auto',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'flex-start',
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
  }
})
