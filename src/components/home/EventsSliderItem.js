import React, { Component } from 'react';
import {  StyleSheet, css } from 'aphrodite';

export default class EventsSliderItem extends Component {
  render() {
    return (
      <div className={css(style.eventSliderItem)}>
        <h1 className={css(style.date)  + ' animated fadeIn'}>{this.props.date}</h1>
        <h1 className={css(style.title) + ' animated fadeIn'}>{this.props.title}</h1>
        <p className={css(style.location) + ' animated fadeIn'}>{this.props.location}</p>
        <div className={css(style.buttonGroup)}>
          <button className={css(style.button) + ' animated fadeIn'}> VER MAS +</button>
          <button className={css(style.button) + ' animated fadeIn'}>COMPRAR</button>
        </div>
      </div>
    );
  }
}

const style = StyleSheet.create({
  eventSliderItem: {
    padding: '1rem 2rem',
    borderRight: '2px solid #161616',
    display: 'inline-block',
    textAlign: 'center',
    maxWidth: '17rem',
    whiteSpace: 'normal',
    "@media(max-width: 480px)": {
      padding: '2rem'
    },
    "@media(max-width: 400px)": {
      padding: '0.6rem'
    }
  },
  date: {
    fontSize: '1.5rem',
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    animationDelay: '0.2s'
  },
  location: {
    marginBottom: '1rem',
    animationDelay: '0.4s'
  },
  button: {
    color: 'white',
    fontSize: '0.7rem',
    border: '1px solid #161616',
    fontWeight: 'bold',
    background: '#161616',
    padding: '0.3rem 0.6rem',
    borderRadius: '10px',
    marginRight: '1rem',
    marginTop: '1rem',
    animationDelay: '0.5s'
  }
})
