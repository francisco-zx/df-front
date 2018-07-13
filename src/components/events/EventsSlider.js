import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import EventsSliderPic from '../../assets/events/events_slider.jpg';
import EventsSliderInfo from './EventsSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

class EventsSlider extends Component {

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
            this.props.events.length ?
              this.props.events.map((event, index) => {
                return(
                  <div >
                  <Link to={`/event/${event.slug}`}>
                    <div className={css(style.sliderItem)} style={{backgroundImage: `url(${event.img_portada})`}}>
                      <EventsSliderInfo
                        title={event.nombre}
                        date={event.fecha_formateda}
                        location={event.venue.nombre}
                        link={event.link}
                        slug={event.slug}
                      />
                      {
                        event.video != null &&
                          <video autoPlay loop muted className={css(style.video)}>
                            <source src='http://zetaequis.com/wp-content/uploads/2018/05/df-bg.mp4'/>
                          </video>
                      }
                    </div>
                    <div className={css(style.sliderOverlay)}></div>
                    </Link>
                  </div>
                )
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

export default connect(mapStateToProps, null)(EventsSlider)

const style = StyleSheet.create({
  section: {
    position: 'relative',
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
  }
})
