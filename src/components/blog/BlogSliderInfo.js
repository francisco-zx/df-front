import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';


export default class BlogSliderInfo extends Component {
  render() {
    return (
        <Link to={`/news/${this.props.slug}`} className={css(style.sliderInfo)}>
          <aside className={css(style.sliderInfoTag) + ' animated fadeIn'}>NOVEDAD</aside>
          <h1 className={css(style.sliderInfoTitle) + ' animated fadeIn'}>{this.props.title}</h1>
          <h3 className={css(style.sliderInfoSubtitle) + ' animated fadeIn'}>{this.props.subtitle}
          </h3>

        </Link>
    );
  }
}

const style = StyleSheet.create({
  sliderInfo: {
    padding: '10rem 6rem',
    zIndex: 666,
    "@media(max-width: 1024px)": {
      padding: '3rem'
    }
  },
  sliderInfoTitle: {
    color: 'white',
    fontSize: '3rem',
    zIndex: 8,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    animationDelay: '0.2s',
    "@media(max-width: 1024px)": {
      fontSize: '2.5rem'
    },
    "@media(max-width: 480px)": {
      fontSize: '1.5rem'
    }
  },
  sliderInfoTag: {
    color: 'white',
    lineHeight: '2px',
    zIndex: 8,
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
    zIndex: 8,
    animationDelay: '0.4s',
    "@media(max-width: 1024px)": {
      fontSize: '2rem',
      maxWidth:'90%',
    },
    "@media(max-width: 900px)": {
      fontSize: '1rem',
      maxWidth:'none%',
    }
  },
  button: {
    color: 'white',
    fontSize: '0.7rem',
    border: '1px solid white',
    fontWeight: 'bold',
    zIndex: 8,
    background: 'transparent',
    padding: '0.3rem 0.6rem',
    borderRadius: '10px',
    marginRight: '1rem',
    marginTop: '1rem',
    animationDelay: '0.6s'
  },
  sliderOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
    maxHeight: '100%'
  }
})
