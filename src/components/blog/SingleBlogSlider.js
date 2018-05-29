import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import BlogSliderPic from '../../assets/blog/blog_slider.png';
import SingleBlogSliderInfo from './SingleBlogSliderInfo';
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
      <section style={style.section}>
        <div >
          <div style={style.sliderItem}>
            <SingleBlogSliderInfo />
          </div>
          <div style={style.sliderOverlay}></div>
        </div>
        <div style={style.goBack}>
          <Link to='/blog'>
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
    backgroundImage: `url(${BlogSliderPic})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    zIndex: 10
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
    zIndex: 999
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
}
