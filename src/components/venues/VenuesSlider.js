import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from  'aphrodite';

import VenuesSliderPic from '../../assets/venues/venues_slider.jpg';
import VenuesSliderInfo from './VenuesSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

export default class VenueSlider extends Component {

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
      <section>
        <Slider {...settings} className={css(style.slider)} prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
          <div >
            <Link to='/venue/teatro-vorterix'>
            <div className={css(style.sliderItem)}>
              <VenuesSliderInfo />
            </div>
            </Link>
            <div className={css(style.sliderOverlay)}></div>
          </div>
          <div >
            <div className={css(style.sliderItem)}>
              <VenuesSliderInfo />
            </div>
          </div>
          <div >
            <div className={css(style.sliderItem)}>
              <VenuesSliderInfo />
            </div>
          </div>
          <div >
            <div className={css(style.sliderItem)}>
              <VenuesSliderInfo />
            </div>
          </div>
        </Slider>
        <BorderGradient />
      </section>
    );
  }
}

const style = StyleSheet.create({
  sliderItem: {
    height: '72vh',
    backgroundImage: `url(${VenuesSliderPic})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    "@media(max-width: 1024px)": {
      height: '62vh'
    },
    "@media(max-width: 767px)": {
      height: '45vh'
    },
    "@media(max-width: 480px)": {
      height: '42svh'
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
  }
})
