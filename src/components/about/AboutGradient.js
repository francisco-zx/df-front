import React, { Component } from 'react';
import { StyleSheet, css } from  'aphrodite';
import CountTo from 'react-count-to';

export default class AboutText extends Component {
  render() {
    return (
      <article className={css(style.aboutGradient)}>
        <div className='container'>
          <p
            className={css(style.title) + ' animated fadeIn'}
            dangerouslySetInnerHTML={{ __html: this.props.text}}
          >
          </p>
        </div>
      </article>
    );
  }
}
const style = StyleSheet.create({
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
    textTransform: 'uppercase',
    "@media(max-width: 1024px)": {
      fontSize: '3.5rem'
    },
    "@media(max-width: 480px)": {
      fontSize: '2rem'
    }
  },
  lastTitle: {
    color: 'white',
    fontSize: '5rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    "@media(max-width: 1024px)": {
      fontSize: '3.5rem'
    },
    "@media(max-width: 480px)": {
      fontSize: '2rem'
    }
  },
  bold: {
    fontWeight: 600
  }
})
