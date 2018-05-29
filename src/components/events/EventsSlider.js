import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import EventsSliderPic from '../../assets/events/events_slider.jpg';
import EventsSliderInfo from './EventsSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

export default class EventsSlider extends Component {

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
            <Link to='/events/harry-styles'>
              <div className={css(style.sliderItem)}>
                <EventsSliderInfo />
              </div>
              <div className={css(style.sliderOverlay)}></div>
            </Link>
          </div>
          <div >
            <Link to='/events/harry-styles'>
              <div className={css(style.sliderItem)}>
                <EventsSliderInfo />
              </div>
            </Link>
          </div>
          <div >
            <Link to='/events/harry-styles'>
              <div className={css(style.sliderItem)}>
                <EventsSliderInfo />
              </div>
            </Link>
          </div>
          <div >
            <Link to='/events/harry-styles'>
              <div className={css(style.sliderItem)}>
                <EventsSliderInfo />
              </div>
            </Link>
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
    backgroundImage: `url(${EventsSliderPic})`,
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
  }
})
