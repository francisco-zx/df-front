import React, { Component } from 'react';
import Slider from 'react-slick';
import { StyleSheet, css } from 'aphrodite';

import BlogSliderPic from '../../assets/blog/blog_slider.png';
import BlogSliderInfo from './BlogSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

export default class BlogSlider extends Component {

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
            <div className={css(style.sliderItem)}>
              <BlogSliderInfo />
            </div>
            <div className={css(style.sliderOverlay)}></div>
          </div>
          <div >
            <div className={css(style.sliderItem)}>
              <BlogSliderInfo />
            </div>
          </div>
          <div >
            <div className={css(style.sliderItem)}>
              <BlogSliderInfo />
            </div>
          </div>
          <div >
            <div className={css(style.sliderItem)}>
              <BlogSliderInfo />
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
    backgroundImage: `url(${BlogSliderPic})`,
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
      height: '34vh'
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
