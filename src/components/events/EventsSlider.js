import React, { Component } from 'react';
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
      dotsClass: "slick-dots",
      autoplay: true,
      autoplaySpeed: 5000,
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
            <Link to='/events/harry-styles'>
              <div style={style.sliderItem}>
                <EventsSliderInfo />
              </div>
              <div style={style.sliderOverlay}></div>
            </Link>
          </div>
          <div >
            <Link to='/events/harry-styles'>
              <div style={style.sliderItem}>
                <EventsSliderInfo />
              </div>
            </Link>
          </div>
          <div >
            <Link to='/events/harry-styles'>
              <div style={style.sliderItem}>
                <EventsSliderInfo />
              </div>
            </Link>
          </div>
          <div >
            <Link to='/events/harry-styles'>
              <div style={style.sliderItem}>
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

const style = {
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
}
