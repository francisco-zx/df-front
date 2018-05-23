import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class SectionTitle extends Component {
  render() {
    return (
      <div className={css(style.sectionTitleContainer)}>
      <h1 className={css(style.sectionTitle)}>{this.props.text}</h1>
      </div>
    );
  }
}

const style = StyleSheet.create({
  sectionTitleContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    display: 'inline-block',
    paddingBottom: '4px',
    borderBottom: '1px solid black',
    marginBottom: '3rem',
    "@media(max-width: 1024px)": {
      marginTop: '2rem',
    },
    "@media(max-width: 900px)": {
      marginTop: '3rem',
    }
  }
})
