import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import TimelineSliderPic from '../../assets/timeline/timeline_slider.png';
import TimelinePicker from '../../assets/timeline/timeline_picker.svg';
import pickerArtist from '../../assets/timeline/timeline_artist_picker.png';
import TimeLineSliderInfo from './TimeLineSliderInfo';
import BorderGradient from  '../layout/BorderGradient';


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
    const settingsNav = {
      slidesToScroll: 1,
      slidesToShow: 10,
      asNavFor: this.refs.mainSlider,
      dots: false,
      rtl: false,
      focusOnSelect: true,
    };

    return (
      <section style={style.section}>
        <Slider {...settings} ref='mainSlider' style={style.slider} prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='coldplay'/>
              </div>
              <div style={style.sliderOverlay}></div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='Dua Lipa'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='Ariana Grande'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='BAF Week'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='5SOS'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='Bon Jovi'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='Julian Casablancas'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='John Mayer'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='Monsters of Rock'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div style={style.sliderItem}>
                <TimeLineSliderInfo name='Bowie by Mick Rock'/>
              </div>
            </Link>
          </div>
        </Slider>
        <div style={style.goBack}>
          <Link to='#'>
            <button style={style.backButton}>2018</button>
            <button style={style.backButton}>2017</button>
            <button style={style.backButton}>2016</button>
            <button style={style.backButton}>2015</button>
          </Link>
        </div>
        <BorderGradient />
        <article className='container' style={style.navSlider}>
        <div>
        </div>
          <Slider {...settingsNav} asNavFor={this.refs.mainSlider} ref='navSlider' id='navSlider' prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>Coldplay</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>Dua Lipa</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>Ariana Grande</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>BAF Week</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>5SOS</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>Bon Jovi</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>Julian Casablancas</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>John Mayer</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>Monsters of Rock</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItemFilter} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtistFilter} width='84%'/>
                <h3 style={style.timelineTitle}>Bowie by Mick Rock</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div style={style.navSliderItem} className='clickable'>
                <img src={TimelinePicker} style={style.pickerImg} width='100%'/>
                <img src={pickerArtist} style={style.pickerArtist} width='84%'/>
                <h3 style={style.timelineTitle}>Bowie by Mick Rock</h3>
                <h4 style={style.timelineSubTitle}>Estadio Unico de La Plata</h4>
                <h4 style={style.timelineSubTitle}>14 y 15 de Nov</h4>
              </div>
            </div>



          </Slider>
        </article>
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
    backgroundImage: `url(${TimelineSliderPic})`,
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
    marginTop: '-200px',
    background: '-moz-linear-gradient(top, rgba(22,22,22,0) 0%, rgba(22,22,22,1) 100%)',
    background: '-webkit-linear-gradient(top, rgba(22,22,22,0) 0%,rgba(22,22,22,1) 100%)',
    background: 'linear-gradient(to bottom, rgba(22,22,22,0) 0%,rgba(22,22,22,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00161616", endColorstr="#161616",GradientType=0 )',

  },
  navSliderItem: {
    margin: '0 120px ',
    textAlign: 'center',
    position: 'relative',
    width: '7rem'
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
