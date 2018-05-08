import React, { Component } from 'react';

import LogoGroup from '../../logo_group.svg';

export default class AboutText extends Component {
  render() {
    return (
      <article style={style.aboutGroup}>
        <div className='container' style={style.content}>
          <h4 style={style.subTitle}>Conocé más</h4>
          <a href='https://www.google.com.ar/search?q=df+group+argentina' target='_blank'>
            <img src={LogoGroup} width='200px'/>
          </a>
        </div>
      </article>
    );
  }
}
const style = {
  aboutGroup: {
    background: '#161616',
    marginBottom: '1rem',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  subTitle: {
    fontFamily: 'Avenir',
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 500,
    fontSize: '0.8rem',
    marginBottom: '2rem',
    fontWeight: 'bold'
  }
}
