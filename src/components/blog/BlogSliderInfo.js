import React, { Component } from 'react';
import Slider from 'react-slick';


export default class BlogSliderInfo extends Component {
  render() {
    return (
        <div style={style.sliderInfo}>
          <aside style={style.sliderInfoTag}>NOVEDAD</aside>
          <h1 style={style.sliderInfoTitle}>Anunciamos BAFWEEK FW18!</h1>
          <h3 style={style.sliderInfoSubtitle}>Organizado por DF Entertainment, IRSA y La Rural.
          </h3>
          <div style={style.buttonGroup}>
            <button style={style.button}>VER MAS +</button>
          </div>
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
