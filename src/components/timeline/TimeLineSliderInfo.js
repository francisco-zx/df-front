import React, { Component } from 'react';
import Slider from 'react-slick';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';


export default class TimeLineSliderInfo extends Component {
  componentDidMount() {

  }
  render() {
    return (
        <div className={css(style.sliderInfo)}>
          <h1 className={css(style.sliderInfoTitle)}>{this.props.name}</h1>
          {
            !!this.props.show &&
              <div>
                <h3 className={css(style.sliderInfoSubtitle)}>{this.props.date}
                </h3>
                <h3 className={css(style.sliderInfoSubtitle)}>{this.props.venue}
                </h3>
              </div>
          }

            <div className={css(style.buttonGroup)}>
              <button className={css(style.button)}>VER MÁS +</button>
            </div>

        </div>
    );
  }
}
/* <Link to={`/timeline/${this.props.slug}`}> </Link> */
const style = StyleSheet.create({
  sliderInfo: {
    padding: '10rem 6rem',
    zIndex: 3,
    width: '100%',
    "@media(max-width: 1024px)": {
      padding: '3rem'
    }
  },
  sliderInfoTitle: {
    color: 'white',
    fontSize: '3rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    animationDelay: '0.2s',
    "@media(max-width: 1024px)": {
      fontSize: '2.5rem'
    },
    "@media(max-width: 480px)": {
      fontSize: '1.5rem',
      maxWidth: '10rem',
    }
  },
  sliderInfoTag: {
    color: 'white',
    lineHeight: '2px',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    fontWeight: 300,
    paddingBottom: '10px',
    marginBottom: '1rem'
  },
  sliderInfoSubtitle: {
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    lineHeight: 1.5,
    maxWidth:'70%',
    animationDelay: '0.4s',
    "@media(max-width: 1024px)": {
      fontSize: '2rem',
      maxWidth:'90%',
    },
    "@media(max-width: 900px)": {
      fontSize: '1rem',
      maxWidth:'none%',
    }
  },
  button: {
    color: 'white',
    fontSize: '0.7rem',
    border: '1px solid white',
    fontWeight: 'bold',
    background: 'transparent',
    padding: '0.3rem 0.6rem',
    borderRadius: '10px',
    marginRight: '1rem',
    marginTop: '1rem',
    animationDelay: '0.6s'
  }
})
