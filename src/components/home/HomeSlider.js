import React, { Component } from 'react';
import Slider from 'react-slick';

import HomeSliderPic from '../../assets/home/home_slider.jpg';
import HomeSliderInfo from './HomeSliderInfo';

export default class HomePage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "slick-dots",
      autoplay: true,
      autoplaySpeed: 5000,
      arrowNext: {HomeSliderPic}
    };

    return (
      <Slider {...settings} style={style.slider}>
        <div >
          <div style={style.sliderItem}>
            <HomeSliderInfo />
          </div>
        </div>
      </Slider>

    );
  }
}

const style = {
  sliderItem: {
    height: '62vh',
    backgroundImage: `url(${HomeSliderPic})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center'
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
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1
  }
}
