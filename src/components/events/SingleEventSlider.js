import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import SingleEventSliderPic from '../../assets/events/single_event_slider.jpg';
import SingleEventSliderInfo from './SingleEventSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

export default class SingleEventSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "slick-dots",
      autoplay: true,
      fade: 'true',
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
      <section style={style.section}>
        <Slider {...settings} style={style.slider} prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
          <div >
            <div style={style.sliderItem}>
              <SingleEventSliderInfo name='coldplay'/>
              <video autoPlay loop muted style={style.video}>
                <source src='http://zetaequis.com/wp-content/uploads/2018/05/df-bg.mp4'/>
              </video>
            </div>            
            <div style={style.sliderOverlay}></div>
          </div>
          <div >
            <div style={style.sliderItem}>
              <SingleEventSliderInfo name='Dua Lipa'/>
            </div>
          </div>
          <div >
            <div style={style.sliderItem}>
              <SingleEventSliderInfo name='Ariana Grande' />
            </div>
          </div>
        </Slider>
        <div style={style.buttonGroup}>
          <button style={style.button} className='hover-shadow'>COMPRAR  TICKETS</button>
        </div>
        <div style={style.shareEvent}>
          Compartir:
          <i className='fa fa-facebook' style={style.shareIcon}></i>
          <i className='fa fa-twitter' style={style.shareIcon}></i>
        </div>
        <div style={style.goBack}>
          <Link to='/events'>
            <button style={style.backButton}><i className='fa fa-angle-left'></i> VOLVER</button>
          </Link>
        </div>
        <BorderGradient />
      </section>
    );
  }
}

const style = {
  section: {
    position: 'relative'
  },
  sliderItem: {
    height: '72vh',
    backgroundImage: `url(${SingleEventSliderPic})`,
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
  button: {
    color: 'white',
    fontSize: '1rem',
    position: 'absolute',
    bottom: 0,
    border: 'none',
    margin: '6rem',
    fontWeight: 500,
    background: 'rgb(255,183,73)',
    background: '-moz-linear-gradient(left, rgba(255,183,73,1) 0%, rgba(255,38,125,1) 50%, rgba(111,23,255,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    background: 'linear-gradient(to right, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffb749", endColorstr="#6f17ff",GradientType=1 )',
    padding: '1rem',
    verticalAlign: 'middle',
    borderRadius: '50px',
    marginRight: '1rem',
    marginTop: '1rem',
    letterSpacing: '2px'
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
  },
  backButton: {
    color: 'white',
    fontSize: '0.7rem',
    border: '1px solid white',
    fontWeight: 'bold',
    background: 'transparent',
    padding: '0.3rem 0.6rem',
    borderRadius: '10px',
  },
  video: {
    position: 'absolute',
    width: '100vw',
    height: 'auto'
  }
}
