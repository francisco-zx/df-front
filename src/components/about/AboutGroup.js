import React, { Component } from 'react';

import LogoGroup from '../../logo_group.svg';
import BorderGradient from '../layout/BorderGradient';

export default class AboutText extends Component {
  render() {
    return (
      <article style={style.aboutGroup}>
        <BorderGradient />
        <div className='container' style={style.content}>
          <h4 style={style.subTitle}>Conocé más</h4>
          <a href='http://www.dfgroup.com' target='_blank' >
            <img src={LogoGroup} width='300px'className='logo-group'/>
          </a>
        </div>
      </article>
    );
  }
}
const style = {
  aboutGroup: {
    background: '#161616',
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
  },
  logo: {
    "@media(max-width:480px)": {
      width: '200px'
    }
  }
}
