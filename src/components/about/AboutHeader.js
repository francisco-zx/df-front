import React, { Component } from 'react';
import Logo from '../../logo_white.svg';
import HeroBg from '../../assets/about/herobg.jpg'


export default class AboutHeader extends Component {
  render() {
    return (
      <article style={style.aboutHeader}>
        <img src={Logo} style={style.logo} alt='Logo DF Entertainment' width='40%'/>
        <div style={style.overlay}></div>
      </article>
    );
  }
}
const style = {
  aboutHeader: {
    position: 'relative',
    height: '72vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `url(${HeroBg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
  logo: {
    display: 'flex',
    zIndex: 666
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
}
