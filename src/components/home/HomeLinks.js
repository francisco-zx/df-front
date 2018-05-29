import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import EventBanner from '../../assets/home/event_banner.jpg';
import TimelineBanner from '../../assets/home/timeline_banner.jpg';

export default class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <div className={css(style.linksHolder)}>
          <div className={css(style.link, style.linkLeft) + ' animated fadeIn'}>
            <h3 className={css(style.linkTitle) + ' animated fadeIn'}>Eventos</h3>
            <Link to='/events'>
              <button href='/events' className={css(style.linkButton) + ' animated fadeIn'}>VER MAS</button>
            </Link>
          </div>
          <div className={css(style.link, style.linkRight) + ' animated fadeIn'}>
            <h3 className={css(style.linkTitle) + ' animated fadeIn'}>Timeline</h3>
            <Link to='/timeline'>
              <button href='/timeline' className={css(style.linkButton) + ' animated fadeIn'}>VER MAS</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const style = StyleSheet.create({
  linksHolder: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    "@media(max-width: 1024px)": {
      flexWrap: 'wrap',
    }
  },
  link: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    width: '50%',
    flexBasis: '50%',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '8rem',
    background: 'rgb(255,183,73)',
    background: '-moz-linear-gradient(left, rgba(255,183,73,1) 0%, rgba(255,38,125,1) 50%, rgba(111,23,255,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    background: 'linear-gradient(to right, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffb749", endColorstr="#6f17ff",GradientType=1 )',
    backgroundSize: 'cover',
    "@media(max-width:  1024px)": {
      padding: '6rem 2rem',
      width: '100%',
      flexBasis: '100%'
    }
  },
  linkLeft: {
    marginRight: '2rem',
    background: `url(${EventBanner})`,
    backgroundSize: 'cover',
    "@media(max-width:  1024px)": {
      marginRight: 0,
      marginBottom: '2rem'
    }
  },
  linkRight: {
    background: `url(${TimelineBanner})`,
    backgroundSize: 'cover'
  },
  linkTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    display: 'block',
    zIndex: 999,
    animationDelay: '0.3s'
  },
  linkButton: {
    background: '#161616',
    border: 'none',
    color: 'white',
    padding: '1rem',
    zIndex: 999,
    animationDelay: '0.5s'
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
})
