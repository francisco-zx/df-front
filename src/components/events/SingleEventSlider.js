import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

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
          <a className='animated fadeIn' style={{animationDelay: `${i * 0.1}s`}}>
          {i +1}
          </a>
        );
      }
    };

    return (
      <section className={css(style.section)}>
        <Slider {...settings} className={css(style.slider)} prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
          {
            this.props.selectedEvent ?
              <div >
                <div className={css(style.sliderItem)} style={{background: `url(${this.props.selectedEvent.img_portada})`}}>
                  <SingleEventSliderInfo name={this.props.selectedEvent.nombre}/>
                </div>
                <div className={css(style.sliderOverlay)}></div>
              </div>
            : <div >
                <div className={css(style.sliderItem)}>
                </div>
              </div>
          }
        </Slider>
        {
          this.props.selectedEvent &&
          this.props.selectedEvent.link &&
            <div className={css(style.buttonGroup)}>
              <a href={this.props.selectedEvent.link} target='_blank'>
                <button className={css(style.button) + ' animated fadeIn'}>COMPRAR  TICKETS</button>
              </a>
            </div>
        }
        {
          this.props.selectedEvent ?
            <div className={css(style.shareEvent) + ' animated fadeIn'}>
              Compartir:
                <a title="send to Facebook"
                  href={`http://www.facebook.com/sharer.php?u=${document.location.href}&t=${this.props.selectedEvent.nombre},&nbsp${this.props.selectedEvent.fecha_formateada}`}
                  target="_blank"
                  className='clickable'
                >
                  <i className={css(style.shareIcon) + ' fa fa-facebook'} ></i>
                </a>
                <a href={`https://twitter.com/intent/tweet?text=${this.props.selectedEvent.nombre}, ${this.props.selectedEvent.fecha_formateada}&url=${document.location.href}&hashtags=dfentertainment,allaccess,${this.props.selectedEvent.nombre}`} target='_blank'>
                  <i className={css(style.shareIcon) + ' fa fa-twitter'}  ></i>
                </a>
            </div>
            : ''
          }
        <div className={css(style.goBack)}>
          <Link to='/events'>
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
    backgroundPosition: 'center center',
    display: 'flex',
    alignItems: 'center',
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
    transition: 'all 0.5s ease',
    letterSpacing: '2px',
    "@media(max-width: 1024px)": {
      margin: '2rem',
    },
    "@media(max-width: 480px)": {
      left: '50%',
      transform: 'translate(-50%, 50%)',
      margin: 0,
      fontSize: '0.8rem'
    },
    "@media(max-width: 400px)": {
      fontSize: '0.6rem'
    }
  },
  shareEvent: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '2rem 6rem',
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: 600,
    textTransform: 'uppercase',
    "@media(max-width: 480px)": {
      display: 'none'
    }
  },
  shareIcon: {
    color: 'white',
    padding: '0 0.5rem',
    fontSize:'1.3rem'
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '2rem 6rem',
    color: 'white',
    "@media(max-width:1024px)": {
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
