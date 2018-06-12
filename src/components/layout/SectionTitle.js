import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

export default class SectionTitle extends Component {
  render() {
    return (
      <div className={css(style.sectionTitleContainer)}>
        {
          this.props.link ?
            <Link to={`${this.props.link && this.props.link }`}>
              <h1 className={css(style.sectionTitle) + ' animated fadeIn'}>{this.props.text}</h1>
            </Link>
          : <h1 className={css(style.sectionTitle) + ' animated fadeIn'}>{this.props.text}</h1>
        }
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
    color: '#161616',
    borderBottom: '1px solid black',
    marginBottom: '3rem',
    "@media(max-width: 1024px)": {
      marginTop: '2rem',
    },
    "@media(max-width: 900px)": {
      marginTop: '3rem',
    },
    "@media(max-width: 380px)": {
      marginTop: '1rem',
      marginBottom: '2rem'
    }
  }
})
