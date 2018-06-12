import React, { Component } from 'react';
import Slider from 'react-slick';
import { StyleSheet, css } from 'aphrodite';

import HomeSliderPic from '../../assets/events/events_slider.jpg';
import HomeSliderVideoPoster from '../../assets/home/video-poster.jpg';
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
      fade: true,
      dotsClass: "slick-dots",
      autoplay: true,
      autoplaySpeed: 7000,
      customPaging: (i) => {
        return(
          <a className='animated fadeIn' style={{animationDelay: `${i * 0.1 + 0.6}s`}}>
          {i +1}
          </a>
        );
      }
    };

    return (
      <section className={css(style.section)}>
        <Slider {...settings} className={css(style.slider) + 'animated fadeIn'} prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
          <div >
            <div className={css(style.sliderItem)}>
              <HomeSliderInfo title='Lollapalooza 2018' date='16, 17 y 18 de Marzo' location='Hipódromo de San Isidro'/>
              <video autoPlay loop muted className={css(style.video)} poster={HomeSliderVideoPoster}>
                <source src='http://zetaequis.com/wp-content/uploads/2018/05/df-bg.mp4'/>
              </video>
            </div>
            <div className={css(style.sliderOverlay)}></div>
          </div>
          <div >
            <div className={css(style.sliderItem)}>
              <HomeSliderInfo title='Phil Collins' date='26 y 28 de Junio' location='Teatro Vorterix' url='../../assets/events/events_slider.jpg'/>
            </div>
            <div className={css(style.sliderOverlay)}></div>
          </div>
          <div >
            <div className={css(style.sliderItem)}>
              <HomeSliderInfo title='Phil Collins' date='26 y 28 de Junio' location='Teatro Vorterix' url='../../assets/events/events_slider.jpg'/>
            </div>
            <div className={css(style.sliderOverlay)}></div>
          </div>
        </Slider>
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
    backgroundImage: `url(${HomeSliderPic})`,
    backgroundSize: 'cover',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
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
  video: {
    position: 'absolute',
    width: '100vw',
    height: 'auto',
    "@media(max-width: 1080px)": {
      height: '100%',
      width: 'auto'
    }
  }
})
