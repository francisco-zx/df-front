import React, { Component } from 'react';
import CountTo from 'react-count-to';

export default class AboutText extends Component {
  render() {
    return (
      <article style={style.aboutGradient}>
        <div className='container'>
          <h1 style={style.title}><span style={style.bold}>+<CountTo to={100} speed={2000}/></span> Shows</h1>
          <h1 style={style.title}><span style={style.bold}>+<CountTo to={200} speed={2000}/></span> Artistas</h1>
          <h1 style={style.lastTitle}><span style={style.bold}>+<CountTo to={200} speed={2000}/>K</span> Fans</h1>
        </div>
      </article>
    );
  }
}
const style = {
  aboutGradient: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    background: 'rgb(255,183,73)',
    background: '-moz-linear-gradient(left, rgba(255,183,73,1) 0%, rgba(255,38,125,1) 50%, rgba(111,23,255,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    background: 'linear-gradient(to right, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffb749", endColorstr="#6f17ff",GradientType=1 )'
  },
  title: {
    color: 'white',
    fontSize: '5rem',
    fontWeight: 500,
    marginBottom: '1rem',
    textTransform: 'uppercase'
  },
  lastTitle: {
    color: 'white',
    fontSize: '5rem',
    fontWeight: 500,
    textTransform: 'uppercase'
  },
  bold: {
    fontWeight: 600
  }
}
