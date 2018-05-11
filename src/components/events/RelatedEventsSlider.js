import React, { Component } from 'react';

import RelatedEventsSliderItem from './RelatedEventsSliderItem';
import {
  arrowLeftIcon,
  arrowRightIcon
} from "../../assets/IconsSvg";

export default class RelatedEventsSlider extends Component {

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

  render() {
    return (
      <section className='container'>
        <div style={style.eventSliderContainer}>
          <span
            style={style.arrowLeft}
            onClick={this.leftButton}
            >
            {arrowLeftIcon}
          </span>
          <div style={style.eventSlider} id='slider'>
            <RelatedEventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <RelatedEventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <RelatedEventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <RelatedEventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
            <RelatedEventsSliderItem
              title='Lollapalooza Argentina 2018'
              location='Hipodromo de San Isidro'
              date='16, 17 y 18 de Marzo'
              ticketsURL='asdasd'
              />
          </div>
          <span
            styleName='arrow right'
            onClick={this.rightButton}
            style={style.arrowRight}
            >
            {arrowRightIcon}
          </span>
        </div>
      </section>

    );
  }
}

const style = {
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
    background: '-moz-linear-gradient(left, rgba(256,256,256,1) 20%, rgba(256,256,256,0.4) 100%)',
    background: '-webkit-linear-gradient(left, rgba(256,256,256,1) 20%,rgba(256,256,256,0.4) 100%)',
    background: 'linear-gradient(to right, rgba(256,256,256,1) 20%,rgba(256,256,256,0.4) 100%)'
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
    transform: 'translateY(-50%)',
    background: '-moz-linear-gradient(right, rgba(256,256,256,1) 20%, rgba(256,256,256,0.4) 100%)',
    background: '-webkit-linear-gradient(right, rgba(256,256,256,1) 20%,rgba(256,256,256,0.4) 100%)',
    background: 'linear-gradient(to left, rgba(256,256,256,1) 20%,rgba(256,256,256,0.4) 100%)'
  }
}
