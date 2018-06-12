import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Slider from 'react-slick';
import AliceCarousel from 'react-alice-carousel';
import BorderGradient from './BorderGradient';
import "./topbar.css";

export default class TopBar extends Component {
  render() {

    const settings = {
      variableWidth: true,
      focusOnSelect: false,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed:5,
      speed: 20000,
      pauseOnHover: true,
      cssEase: 'linear'
    };

    return (
      <section className={css(style.topBar)}>
      <div className='sliderHolder'>
      <Slider {...settings} className={css(style.slider)}>
        <div><b className={css(style.sliderItem, style.bold)}>Proximos Eventos: </b></div>
        { /*
          this.props.topBar.length ?
            this.props.topBar.map((item, index) => {
              return( <div><p className={css(style.sliderItem)}>{item} /</p></div> )
            })
          : <div>Cargando...</div>
          */
        }
      </Slider>
      </div>
      <BorderGradient />
      </section>
    );
  }
}

const style = StyleSheet.create({
  topBar: {
    width: '100%',
    background: '#161616',
    color: 'white',
    overflow: 'hidden',
  },
  slider: {
    padding: '1rem 6rem',
    "@media(max-width: 1024px)": {
      padding: '1rem 2rem'
    },
    "@media(max-width: 480px)": {
      padding: '1rem'
    }
  },
  sliderItem: {
    paddingRight: '10px'
  },
  bold: {
    fontWeight: 'bold'
  }
})
