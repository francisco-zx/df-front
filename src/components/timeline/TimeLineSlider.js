import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import TimelinePicker from '../../assets/timeline/timeline_picker.svg';
import pickerArtist from '../../assets/timeline/timeline_picker.svg';
import TimeLineSliderInfo from './TimeLineSliderInfo';
import BorderGradient from  '../layout/BorderGradient';
import Overlay from '../layout/Overlay';


import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

export default class TimelineSlider extends Component {

  componentDidMount() {
    this.setState({
      mainSlider: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: this.refs.navSlider,
      fade: true,
      infinite: false,
      dotsClass: "slick-dots",
      autoplaySpeed: 5000,
      customPaging: (i) => {
        return(
          <a className='animated fadeIn' className={{animationDelay: `${i * 0.1}s`}}>
          {i +1}
          </a>
        );
      }
    };
    const settingsNav = {
      slidesToScroll: 1,
      variableWidth: true,
      asNavFor: this.refs.mainSlider,
      dots: false,
      rtl: false,
      infinite: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            variableWidth: true,
            centerMode: true,
          }
        }
      ]
    };

    return (
      <section className={css(style.section)}>
        <Slider {...settings} ref='mainSlider' className={css(style.slider)} prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
          {
            this.props.timeline.length ?
              this.props.timeline.map((timeline, index) => (
                <div key={index}>
                  <Link to={`/timeline/${timeline.slug}`}>
                    <div className={css(style.sliderItem)} style={{background: `url(${timeline.img_portada})`, backgroundPosition: 'center center'}}>
                      <TimeLineSliderInfo
                        name={timeline.nombre}
                        date={timeline.fecha_formateada}
                        venue={timeline.venue.nombre}
                        slug={timeline.slug}
                      />
                    </div>
                    {

                      !!timeline.mostrar_overlay &&
                        <div className={css(style.sliderOverlay)}></div>
                    }
                  </Link>
                </div>
              ))
            : <div >
                <div className={css(style.sliderItem)}>
                </div>

                <div className={css(style.sliderOverlay)}></div>
            </div>
          }
        </Slider>
        <div className={css(style.goBack)}>
          <Link to='#'>
            <button className={css(style.backButton, style.active)}>2018</button>
            <button className={css(style.backButton)}>2017</button>
            <button className={css(style.backButton)}>2016</button>
            <button className={css(style.backButton)}>2015</button>
          </Link>
        </div>
        <div className={css(style.mobileYears)}>
          <button className={css(style.backButton, style.active)}>2018</button>
          <button className={css(style.backButton)}>2017</button>
          <button className={css(style.backButton)}>2016</button>
          <button className={css(style.backButton)}>2015</button>
        </div>
        <BorderGradient />
        <article className={css(style.navSlider)} style={{position: 'relative',overflow: 'hidden'}} id='navSlider'>
          <Slider {...settingsNav} asNavFor={this.refs.mainSlider}  ref='navSlider' prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
            {
              this.props.timeline.length ?
              this.props.timeline.map((timeline, index) =>(
                <div key={index} >
                  <div className={css(style.navSliderItem) + ' clickable'}>
                    <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                    <img src={timeline.img_artista} className={css(style.pickerArtist)} width='84%'/>
                    <h3 className={css(style.timelineTitle)}>{timeline.nombre}</h3>
                    <h4 className={css(style.timelineSubTitle)}>{timeline.venue.nombre}</h4>
                    <h4 className={css(style.timelineSubTitle)}>{timeline.fecha_formateada}</h4>
                  </div>
                </div>
              ))
              : ''
            }
          </Slider>
        </article>
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
    zIndex: 999,
    position: 'relative',
    backgroundSize: 'cover',
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
  goBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'none',
    margin: '2rem 6rem',
    color: 'white',
    "@media(max-width:480px)": {
      display: 'none'
    },
    "@media(max-width:1024px)": {
      margin: '3rem'
    }
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
    "@media(max-width:480px)": {
      padding: '1rem 0'
    }
  },
  navSliderItem: {
    margin: '0 20px ',
    textAlign: 'center',
    position: 'relative',
    width: '7rem',
    "@media(max-width:480px)": {
    }
  },
  navSliderItemFilter: {
    margin: '0 120px ',
    textAlign: 'center',
    position: 'relative',
    width: '7rem',
    filter: 'greyscale()'
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
  pickerArtistFilter: {
    position:'absolute',
    left: 0,
    top: 0,
    padding: '6px',
    borderRadius: '50%',
    filter: 'greyscale()'
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '-moz-linear-gradient(left, rgba(22,22,22,0.4) 0%, rgba(22,22,22,0) 3%, rgba(22,22,22,0) 97%, rgba(22,22,22,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(22,22,22,0.4) 0%,rgba(22,22,22,0) 3%,rgba(22,22,22,0) 97%,rgba(22,22,22,1) 100%)',
    background: 'linear-gradient(to right, rgba(22,22,22,0.4) 0%,rgba(22,22,22,0) 3%,rgba(22,22,22,0) 97%,rgba(22,22,22,1) 100%)',
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
  mobileYears: {
    maxWidth: '100%',
    height: 'auto',
    padding: '1rem',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgb(255,183,73)',
    background: '-moz-linear-gradient(left, rgba(255,183,73,1) 0%, rgba(255,38,125,1) 50%, rgba(111,23,255,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    background: 'linear-gradient(to right, rgba(255,183,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffb749", endColorstr="#6f17ff",GradientType=1 )',
    "@media(min-width: 480px)": {
      display: 'none'
    }
  },
  active: {
    background: 'white',
    color: '#161616'
  }
})
