import React, { Component } from 'react';
import Slider from 'react-slick';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import HomeSliderInfo from './HomeSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

class HomeSlider extends Component {

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
        {
          this.props.events.length ?
            this.props.events.map((event, index) => {
              if(event.destacado === 1){
                return(
                  <div key={index}>
                    <div className={css(style.sliderItem)} style={{backgroundImage: `url(${event.img_portada})`, backgroundPosition: 'center center'}}>
                     
                      {
                        event.video != null &&
                          <iframe type="text/html"
                              width="100%"
                              height="800px"
                              className={css(style.video)}
                              src={`http://www.youtube.com/embed/${event.video.split('/')[3]}?iv_load_policy=3&autoplay=1&rel=0&controls=0&mute=1&loop=1`}
                              frameBorder="0"
                              allow='autoplay'>
                          </iframe>
                      }
                    </div>
                    <div className={css(style.sliderOverlay)}></div>
                  </div>
                )
              }
            })
          : <div >
              <div className={css(style.sliderItem)}>
              </div>
              <div className={css(style.sliderOverlay)}></div>
            </div>
        }
        </Slider>
        <BorderGradient />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, null)(HomeSlider)

const style = StyleSheet.create({
  section: {
    position: 'relative',
    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
  },
  sliderItem: {
    height: '72vh',
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
    "@media(max-width: 1080px)": {
      height: '100%',
      width: 'auto'
    },
    "@media(max-width: 480px)": {
      display: 'none'
    }
  }
})
