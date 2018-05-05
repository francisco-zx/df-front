import React, { Component } from 'react';

import BorderGradient  from './BorderGradient';
import { arrowRightIcon } from "../../assets/IconsSvg";

export default class Footer extends Component {
  render() {
    return (
      <footer style={style.footer}>
        <article style={style.footerTop}>
          <div style={style.topLeft}>Mas de DF Entertainment</div>
          <div style={style.topRight}><i className='fa fa-caret-right'></i></div>
        </article>
        <BorderGradient />
        <article style={style.footerBottom}>
          <div style={style.bottomLeft}>
            <h3 style={style.bottomTitle}>Suscribite a Nuestro Newsletter</h3>
          </div>
          <div style={style.bottomRight}>
            <h3 style={style.bottomTitle}>Follow Us</h3>
            <ul>
              <li><i className='fa fa-instagram'></i></li>
            </ul>
          </div>
        </article>
      </footer>
    );
  }
}

const style = {
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
    letterSpacing: '1px'
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
    flex: 1
  },
  bottomLeft: {
    display:'flex',
    flex: 1,
    justifyContent: 'flex-start'
  },
  bottomRight: {
    display:'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomTitle: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
    justifyContent: 'flex-end',
  }
}
