import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';


export default class BlogSliderInfo extends Component {
  render() {
    return (
        <Link to='/blog/baf-week' className={css(style.sliderInfo)}>
          <aside className={css(style.sliderInfoTag) + ' animated fadeIn'}>NOVEDAD</aside>
          <h1 className={css(style.sliderInfoTitle) + ' animated fadeIn'}>Anunciamos BAFWEEK FW18!</h1>
          <h3 className={css(style.sliderInfoSubtitle) + ' animated fadeIn'}>Organizado por DF Entertainment, IRSA y La Rural.
          </h3>
        </Link>
    );
  }
}

const style = StyleSheet.create({
  sliderInfo: {
    padding: '10rem 6rem',
      zIndex: 666
  },
  sliderInfoTitle: {
    color: 'white',
    fontSize: '3rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    animationDelay: '0.2s',

  },
  sliderInfoTag: {
    color: 'white',
    lineHeight: '2px',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    fontWeight: 300,
    paddingBottom: '10px',
    marginBottom: '1rem'
  },
  sliderInfoSubtitle: {
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    lineHeight: 1.5,
    animationDelay: '0.4s'
  },
  button: {
    color: 'white',
    fontSize: '0.7rem',
    border: '1px solid white',
    fontWeight: 'bold',
    background: 'transparent',
    padding: '0.3rem 0.6rem',
    borderRadius: '10px',
    marginRight: '1rem',
    marginTop: '1rem',
    animationDelay: '0.6s'
  }
})
