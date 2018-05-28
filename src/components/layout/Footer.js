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
          <div className={css(style.topLeft)}>Mas de DF Entertainment</div>
          <div className={css(style.topRight)}><i className='fa fa-caret-right'></i></div>
        </article>
        <BorderGradient />
        <article className={css(style.footerBottom)}>
          <div className={css(style.bottomLeft)}>
            <h3 className={css(style.bottomTitleLeft)}>Suscribite a Nuestro Newsletter</h3>
            <div className={css(style.newsLetter)}>
              <input type='text' className={css(style.input)} placeholder='Ingresa tu Email'/>
              <img src={NewsletterIcon} className={css(style.newsIcon)} />
            </div>
          </div>
          <div className={css(style.bottomRight)}>
            <h3 className={css(style.bottomTitle)}>Follow Us</h3>
            <ul className={css(style.iconGroup)}>
              <li className={css(style.icon)}><i className='fa fa-facebook'></i></li>
              <li className={css(style.icon)}><i className='fa fa-instagram'></i></li>
              <li className={css(style.icon)}><i className='fa fa-twitter'></i></li>
              <li className={css(style.icon)}><i className='fa fa-youtube'></i></li>
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
    paddingLeft: '1rem'
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
    fontSize: '1.3rem'
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
    alignItems: 'flex-start'
  },
  newsIcon: {
    width: '1.5rem',
    position: 'absolute',
    right: 0,
    paddingRight: '5px',
    top: '50%',
    transform: 'translateY(-50%)'
  }
})
