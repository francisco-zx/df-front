import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import EventsSliderItem from './EventsSliderItem';
import {
  arrowLeftIcon,
  arrowRightIcon
} from "../../assets/IconsSvg";

export default class HomeEventsSlider extends Component {

  constructor(props){
    super(props);
    this.state = {
      showLeftArrow: false
    }
  }

  leftButton = e => {
    const slider = document.getElementById('slider');
    let transition = 0;
    const interval = setInterval(() => {
      slider.scrollLeft -= 10;
      transition += 10;
      if (transition === 340) {
        clearInterval(interval);
      }
    }, 15);
  };
  rightButton = e => {
    const slider = document.getElementById('slider');
    console.log(slider)
    let transition = 0;
    const interval = setInterval(() => {
      slider.scrollLeft += 10;
      transition += 10;
      if (transition === 340) {
        clearInterval(interval);
      }
    }, 15);
  };

  isScrolled = () => {
    const slider = document.getElementById('slider');
    console.log(slider.scrollWidth - slider.clientLeft)
    console.log(slider.width)
    if(slider.scrollLeft != 0){
      this.setState({showLeftArrow: true})
    }else{
      this.setState({showLeftArrow: false})
    }
  }


  render() {
    return (
      <div className={css(style.eventSliderContainer)}>
        {
          this.state.showLeftArrow &&
            <span
              className={css(style.arrowLeft)}
              onClick={this.leftButton}
              >
              {arrowLeftIcon}
            </span>
        }
        <div className={css(style.eventSlider) + ' animated fadeIn'} id='slider' onScroll={() => this.isScrolled()}>
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <EventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />

        </div>
        <span
          onClick={this.rightButton}
          className={css(style.arrowRight) + ' animated fadeIn'}
          >
          {arrowRightIcon}
        </span>
      </div>
    );
  }
}

const style = StyleSheet.create({
  eventSliderContainer: {
    position: 'relative'
  },
  eventSlider: {
    width: '100%',
    overflow: 'scroll',
    position: 'relative',
    whiteSpace: 'nowrap'
  },
  sliderItem: {
    display: 'inline-block'
  },
  arrowLeft: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    zIndex: 999,
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    animationDelay: '0.6s',
    background: '-moz-linear-gradient(left, rgba(256,256,256,1) 20%, rgba(256,256,256,0.4) 100%)',
    background: '-webkit-linear-gradient(left, rgba(256,256,256,1) 20%,rgba(256,256,256,0.4) 100%)',
    background: 'linear-gradient(to right, rgba(256,256,256,1) 20%,rgba(256,256,256,0.4) 100%)',
    "@media(max-width: 480px)": {
      display: 'none'
    }
  },
  arrowRight: {
    height: '100%',
    display: 'flex',
    zIndex: 999,
    alignItems: 'center',
    position: 'absolute',
    alignItems: 'center',
    right: 0,
    top: '50%',
    animationDelay: '0.6s',
    transform: 'translateY(-50%)',
    background: '-moz-linear-gradient(right, rgba(256,256,256,1) 20%, rgba(256,256,256,0.4) 100%)',
    background: '-webkit-linear-gradient(right, rgba(256,256,256,1) 20%,rgba(256,256,256,0.4) 100%)',
    background: 'linear-gradient(to left, rgba(256,256,256,1) 20%,rgba(256,256,256,0.4) 100%)',
    "@media(max-width: 480px)": {
      display: 'none'
    }
  }
})
