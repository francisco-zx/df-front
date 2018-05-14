import React, { Component } from 'react';
import Slider from 'react-slick';

import HomeSliderPic from '../../assets/home/home_slider.jpg';
import HomeSliderInfo from './HomeSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

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
      autoplaySpeed: 7000,
      customPaging: (i) => {
        return(
          <a>
          {i +1}
          </a>
        );
      }
    };

    return (
      <section>
        <Slider {...settings} style={style.slider} prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
          <div >
            <div style={style.sliderItem}>
              <HomeSliderInfo />

            </div>
            <div style={style.sliderOverlay}></div>
          </div>
          <div >
            <div style={style.sliderItem}>
              <HomeSliderInfo />
              <video autoPlay loop muted style={style.video}>
                <source src='http://zetaequis.com/wp-content/uploads/2018/05/df-bg.mp4'/>
              </video>
            </div>
          </div>
          <div >
            <div style={style.sliderItem}>
              <HomeSliderInfo />
            </div>
          </div>
          <div >
            <div style={style.sliderItem}>
              <HomeSliderInfo />
            </div>
          </div>
        </Slider>
        <BorderGradient />
      </section>
    );
  }
}

const style = {
  sliderItem: {
    height: '72vh',
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
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1
  },
  video: {
    position: 'absolute',
    width: '100vw',
    height: 'auto'
  }
}
