import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import EventsSliderInfo from './EventsSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import { selectEvent } from '../../Actions/Events_Action'

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

class EventsSlider extends Component {

  select = (item) => {
    this.props.selectEvent(item);
    this.props.history.push(`/event/${item.slug}`)
  }

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
            this.props.events.length ?
              this.props.events.map((event, index) => {
                if(event.destacado === 1){
                  return(
                      <div key={index}>
                        <div onClick={item => this.select(event)} className='clickable hoverShadow'>
                          <div className={css(style.sliderItem)} style={{backgroundImage: `url(${event.img_portada})`, backgroundPosition: 'center center'}}>
                            <EventsSliderInfo
                              title={event.nombre}
                              date={event.fecha_formateada}
                              location={event.venue.nombre}
                              link={event.link}
                              slug={event.slug}
                              show={event.mostrar_texto}
                            />
                            {
                              event.video != null &&
                                /*
                                <video controls="false" autoPlay loop muted className={css(style.video)}>
                                    <source src={`www.youtube.com/watch?v=${event.video.split('/')[3]}`} type="video/mp4" />
                                </video>
                                */
                                <iframe type="text/html"
                                    width="100%"
                                    height="800px"
                                    className={css(style.video)}
                                    src={`http://www.youtube.com/embed/${event.video.split('/')[3]}?iv_load_policy=3&autoplay=1&rel=0&controls=0&mute=1`}
                                    frameBorder="0"
                                    allow='autoplay'>
                                </iframe>
                            }
                          </div>
                          {

                            !!event.mostrar_overlay &&
                              <div className={css(style.sliderOverlay)}></div>
                          }
                        </div>
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
  showSlider: state.showEventsSlider,
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  selectEvent: item => dispatch(selectEvent(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsSlider)

const style = StyleSheet.create({
  section: {
    position: 'relative',
    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
  },
  sliderItem: {
    height: '72vh',
    width: '100%',
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
