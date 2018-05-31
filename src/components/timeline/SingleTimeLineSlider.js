import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import SingleTimelineSliderPic from '../../assets/timeline/single_timeline_slider.png';
import TimelinePicker from '../../assets/timeline/timeline_picker.svg';
import pickerArtist from '../../assets/timeline/timeline_artist_picker.png';
import SingleTimeLineSliderInfo from './SingleTimeLineSliderInfo';
import BorderGradient from  '../layout/BorderGradient';


import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

export default class SingleTimelineSlider extends Component {

  componentDidMount() {
    this.setState({
      mainSlider: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: this.refs.navSlider,
      fade: true,
      dotsClass: "slick-dots",
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
        <Slider {...settings} ref='mainSlider' style={style.slider} prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <SingleTimeLineSliderInfo name='Monsters of Rock'/>
              </div>

            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <SingleTimeLineSliderInfo name='Monsters of Rock'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <SingleTimeLineSliderInfo name='Monsters of Rock'/>
              </div>
            </Link>
          </div>
        </Slider>
        <div style={style.goBack}>
          <Link to='/timeline'>
            <button style={style.backButton}><i class='fa fa-angle-left'></i> VOLVER</button>

          </Link>
        </div>
        <BorderGradient />
      </section>
    );
  }
}

const style = {
  section: {
    position: 'relative',

  },
  sliderItem: {
    height: '72vh',
    backgroundImage: `url(${SingleTimelineSliderPic})`,
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
    fontSize: '0.8rem',
    border: '1px solid white',
    fontWeight: 'bold',
    background: 'transparent',
    padding: '0.3rem 0.6rem',
    borderRadius: '10px',
    marginRight: '0.3rem'
  },
  navSlider: {
    background: '#161616',
    marginBottom: '2rem',
    color: 'white',

  },
  navSliderItem: {
    margin: '0 120px ',
    textAlign: 'center',
    position: 'relative',
    width: '7rem'
  },
  pickerImg: {

  },
  pickerArtist: {
    position:'absolute',
    left: 0,
    top: 0,
    padding: '6px',
    borderRadius: '50%'
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '-moz-linear-gradient(left, rgba(22,22,22,1) 0%, rgba(22,22,22,0) 10%, rgba(22,22,22,0) 90%, rgba(22,22,22,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(22,22,22,1) 0%,rgba(22,22,22,0) 10%,rgba(22,22,22,0) 90%,rgba(22,22,22,1) 100%)',
    background: 'linear-gradient(to right, rgba(22,22,22,1) 0%,rgba(22,22,22,0) 10%,rgba(22,22,22,0) 90%,rgba(22,22,22,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#161616", endColorstr="#161616",GradientType=1 )',
  },
  timelineTitle: {
    fontWeight: 'bold',
    marginTop: '0.5rem',
    fontSize: '1rem',
    textTransform: 'uppercase'
  },
  timelineSubTitle: {
    fontSize: '0.8rem',


  },
}
