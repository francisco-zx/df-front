import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EventBanner from '../../assets/home/event_banner.jpg';
import TimelineBanner from '../../assets/home/timeline_banner.jpg';

export default class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <div style={style.linksHolder}>
          <div style={style.linkLeft}>
            <h3 style={style.linkTitle}>Eventos</h3>
            <Link to='/events'>
              <button href='/events' style={style.linkButton}>VER MAS</button>
            </Link>
          </div>
          <div style={style.link}>
            <h3 style={style.linkTitle}>Timeline</h3>
            <Link to='/timeline'>
              <button href='/timeline' style={style.linkButton}>VER MAS</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const style = {
  linksHolder: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  link: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: '8rem',
    background: 'rgb(255,183,73)',
    background: '-moz-linear-gradient(left, rgba(255,183,73,1) 0%, rgba(255,38,125,1) 50%, rgba(111,23,255,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    background: 'linear-gradient(to right, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffb749", endColorstr="#6f17ff",GradientType=1 )',
    background: `url(${TimelineBanner})`,
    backgroundSize: 'cover'
  },
  linkLeft: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: '8rem',
    background: 'rgb(255,183,73)',
    background: '-moz-linear-gradient(left, rgba(255,183,73,1) 0%, rgba(255,38,125,1) 50%, rgba(111,23,255,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    background: 'linear-gradient(to right, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffb749", endColorstr="#6f17ff",GradientType=1 )',
    marginRight: '2rem',
    background: `url(${EventBanner})`,
    backgroundSize: 'cover'
  },
  linkTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    display: 'block',
    zIndex: 999
  },
  linkButton: {
    background: '#161616',
    border: 'none',
    color: 'white',
    padding: '1rem',
    zIndex: 999
  },
  left: {
    marginRight: '2rem'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    zIndex: 1
  }
}
