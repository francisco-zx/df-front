import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import SingleVenueSliderInfo from './SingleVenueSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

export default class SingleVenueSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dotsClass: "slick-dots",
      autoplay: true,
      autoplaySpeed: 5000,
      customPaging: (i) => {
        return(
          <a className='animated fadeIn' style={{animationDelay: `${i * 0.1}s`}}>
          {i +1}
          </a>
        );
      }
    };

    return (
      <section className={css(style.section)}>
        <div >
          <div className={css(style.sliderItem)} style={{backgroundImage: `url(${this.props.selectedVenue.img_portada})` }}>
            <SingleVenueSliderInfo selectedVenue={this.props.selectedVenue}/>
          </div>
          <div className={css(style.sliderOverlay)}></div>
        </div>
        <div className={css(style.goBack)}>
          <Link to='/venues'>
            <button className={css(style.backButton) + ' animated fadeIn'}><i className='fa fa-angle-left'></i> VOLVER</button>
          </Link>
        </div>
        <BorderGradient />

      </section>
    );
  }
}

const style = StyleSheet.create({
  section: {
    position: 'relative',
    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
  },
  sliderItem: {
    height: '72vh',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    zIndex: 10,
    "@media(max-width: 1024px)": {
      height: '62vh'
    },
    "@media(max-width: 767px)": {
      height: '45vh'
    },
    "@media(max-width: 480px)": {
      height: '42vh'
    }
  },
  sliderItemImg: {
    height: 'auto',
    width: '100%'
  },
  sliderOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1
  },
  shareEvent: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '2rem 6rem',
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: 600,
    textTransform: 'uppercase'
  },
  shareIcon: {
    padding: '0 0.5rem',
    fontSize:'1.3rem'
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '2rem 6rem',
    color: 'white',
    zIndex: 999,
    "@media(max-width: 1024px)": {
      margin: '1rem 3rem'
    }
  },
  backButton: {
    color: 'white',
    fontSize: '0.7rem',
    border: '1px solid white',
    fontWeight: 'bold',
    background: 'transparent',
    padding: '0.3rem 0.6rem',
    borderRadius: '10px',


  }
})
