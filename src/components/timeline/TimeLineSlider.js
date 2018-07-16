import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite'
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
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='coldplay'/>
              </div>
              <div className={css(style.sliderOverlay)}></div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='Dua Lipa'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='Ariana Grande'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='BAF Week'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='5SOS'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='Bon Jovi'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='Julian Casablancas'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='John Mayer'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='Monsters of Rock'/>
              </div>
            </Link>
          </div>
          <div >
            <Link to='#'>
              <div className={css(style.sliderItem)}>
                <TimeLineSliderInfo name='Bowie by Mick Rock'/>
              </div>
            </Link>
          </div>
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
        <article className={css(style.navSlider) + ' container'} style={{position: 'relative',overflow: 'hidden'}}>
        <div>
        </div>
          <Slider {...settingsNav} asNavFor={this.refs.mainSlider}  ref='navSlider' id='navSlider' prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>Coldplay</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>Dua Lipa</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>Ariana Grande</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>BAF Week</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>5SOS</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>Bon Jovi</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>Julian Casablancas</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>John Mayer</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>Monsters of Rock</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtistFilter)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>Bowie by Mick Rock</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
            <div>
              <div className={css(style.navSliderItem) + ' clickable'}>
                <img src={TimelinePicker} className={css(style.pickerImg)} width='100%'/>
                <img src={pickerArtist} className={css(style.pickerArtist)} width='84%'/>
                <h3 className={css(style.timelineTitle)}>Bowie by Mick Rock</h3>
                <h4 className={css(style.timelineSubTitle)}>Estadio Unico de La Plata</h4>
                <h4 className={css(style.timelineSubTitle)}>14 y 15 de Nov</h4>
              </div>
            </div>
          </Slider>
          <Overlay />
        </article>
      </section>
    );
  }
}

const style = StyleSheet.create({
  section: {
    position: 'relative',
  },
  sliderItem: {
    height: '72vh',
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
    filter: 'greyscale()',
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
  mobileYears: {
    maxWidth: '100%',
    height: 'auto',
    padding: '1rem',
    display: 'flex',
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
