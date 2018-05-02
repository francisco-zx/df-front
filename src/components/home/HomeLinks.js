import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <div style={style.linksHolder}>
          <div style={style.link}>
            <h3 style={style.linkTitle}>Eventos</h3>
            <button href='/timeline' style={style.linkButton}>VER MAS</button>
          </div>
          <div style={style.link}>
            <h3 style={style.linkTitle}>Timeline</h3>
            <div>
              <button href='/timeline' style={style.linkButton}>VER MAS</button>
            </div>
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
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: '8rem',
    background: 'rgb(255,183,73)',
    background: '-moz-linear-gradient(left, rgba(255,183,73,1) 0%, rgba(255,38,125,1) 50%, rgba(111,23,255,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    background: 'linear-gradient(to right, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffb749", endColorstr="#6f17ff",GradientType=1 )'
  },
  linkTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    display: 'block'
  },
  linkButton: {
    background: '#161616',
    border: 'none',
    color: 'white',
    padding: '1rem'
  }
}
