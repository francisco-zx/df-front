import React, { Component } from 'react';
import Slider from 'react-slick';

import { Link } from 'react-router-dom';


export default class SingleTimeLineSliderInfo extends Component {
  render() {
    return (
        <div style={style.sliderInfo}>
          <h1 style={style.sliderInfoTitle}>{this.props.name}</h1>
          <h3 style={style.sliderInfoSubtitle}>19 de Marzo, Estadio Instituto
          </h3>
          <h3 style={style.sliderInfoSubtitle}>Córdoba, Argentina
          </h3>
        </div>
    );
  }
}

const style = {
  sliderInfo: {
    padding: '10rem 6rem',
    zIndex: 3
  },
  sliderInfoTitle: {
    color: 'white',
    fontSize: '3rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
    marginTop: '1rem'
  }
}
