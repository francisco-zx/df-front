import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from  'aphrodite';
import { connect } from 'react-redux';

import VenuesSliderInfo from './VenuesSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

class VenueSlider extends Component {

  render() {
    if (this.props.showSlider != 'true'){
      return(
        <React.Fragment></React.Fragment>
      )
    }
    
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
      <section className={css(style.section)}>
        <Slider {...settings} className={css(style.slider)} prevArrow={arrowLeftIconWhite} nextArrow={arrowRightIconWhite}>
          {
            this.props.venues.length ?
              this.props.venues.map((venue, index) => {
                if(venue.visible === 1){
                  return(
                    <div key={index}>
                      <Link to={`/venue/${venue.slug}`}>
                      <div className={css(style.sliderItem)} style={{background: `url(${venue.img_portada})`, backgroundPosition: 'center center'}}>
                        <VenuesSliderInfo
                          name={venue.nombre}
                          location={venue.localidad}
                        />
                      </div>
                      </Link>
                      <div className={css(style.sliderOverlay)}></div>
                    </div>
                  )
                }
              })
            : <div>
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
  showSlider: state.showVenuesSlider,
  venues: state.venues
})

export default connect(mapStateToProps, null)(VenueSlider)

const style = StyleSheet.create({
  section: {
    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
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
      height: '42svh'
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
  }
})
