import React, { Component } from 'react';
import Slider from 'react-slick';


export default class SingleEventSliderInfo extends Component {
  render() {
    return (
        <div style={style.sliderInfo}>
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
    fontSize: '1rem',
    position: 'absolute',
    bottom: 0,
    border: 'none',
    fontWeight: 500,
    background: 'rgb(255,183,73)',
    background: '-moz-linear-gradient(left, rgba(255,183,73,1) 0%, rgba(255,38,125,1) 50%, rgba(111,23,255,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    background: 'linear-gradient(to right, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffb749", endColorstr="#6f17ff",GradientType=1 )',
    padding: '0.7rem',
    borderRadius: '50px',
    marginRight: '1rem',
    marginTop: '1rem'
  }
}
