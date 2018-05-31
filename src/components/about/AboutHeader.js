import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Logo from '../../logo_white.svg';
import HeroBg from '../../assets/about/herobg.jpg'


export default class AboutHeader extends Component {
  render() {
    return (
      <article className={css(style.aboutHeader)}>
        <img src={Logo} className={css(style.logo) + ' animated fadeIn'} alt='Logo DF Entertainment' width='40%'/>
        <div className={css(style.overlay)}></div>
      </article>
    );
  }
}
const style = StyleSheet.create({
  aboutHeader: {
    position: 'relative',
    height: '72vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `url(${HeroBg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    "@media(max-width: 1024px)": {
      height: '62vh'
    },
    "@media(max-width: 767px)": {
      height: '45vh'
    },
    "@media(max-width: 480px)": {
      height: '34vh'
    }
  },
  logo: {
    display: 'flex',
    zIndex: 666,
    animationDelay: '0.3s'
  },
  overlay: {
    background: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    verticalAlign: 'top'
  }
})
