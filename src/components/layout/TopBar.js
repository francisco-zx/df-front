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
      <Slider {...settings} className={css(style.slider) + ' animated fadeIn'}>
        <div><b className={css(style.sliderItem, style.bold)}>Proximos Eventos: </b></div>
        <div><p className={css(style.sliderItem)}><b>Lollapalooza</b> | 20 de Marzo /</p></div>
        <div><p className={css(style.sliderItem)}><b>Phil Collins</b> | 30 de Abril /</p></div>
        <div><p className={css(style.sliderItem)}><b>Harry Styles</b> | 15 de Junio /</p></div>
        <div><p className={css(style.sliderItem)}><b>John Malone</b> | 12 de Septiembre /</p></div>
        <div><p className={css(style.sliderItem)}><b>Sergio Ramos</b> | 10 de Octubre /</p></div>
        <div><p className={css(style.sliderItem)}><b>Duki & YSY A</b> | 15 de Diciembre /</p></div>
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
