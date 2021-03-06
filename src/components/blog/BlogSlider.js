import React, { Component } from 'react';
import Slider from 'react-slick';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import BlogSliderInfo from './BlogSliderInfo';
import BorderGradient from  '../layout/BorderGradient';

import {
  arrowLeftIconWhite,
  arrowRightIconWhite
} from "../../assets/IconsSvg";

class BlogSlider extends Component {

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
      dotsClass: "slick-dots",
      autoplay: true,
      fade: true,
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
            this.props.blog.length ?
              this.props.blog.map((blog, index) => {
                return(
                  <div key={index}>
                    <div className={css(style.sliderItem)} style={{background: `url(${blog.img_portada})`, backgroundPosition: 'center center'}}>
                      <BlogSliderInfo
                        title={blog.nombre}
                        subtitle={blog.subtitulo}
                        slug={blog.slug}
                      />
                      <div className={css(style.sliderOverlay)}></div>
                    </div>
                  </div>
                )
              })
            : <div >
                <div className={css(style.sliderItem)}>
                  <div className={css(style.sliderOverlay)}></div>
                </div>
              </div>
          }
        </Slider>
        <BorderGradient />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  showSlider : state.showBlogsSlider,
  blog: state.blog
})

export default connect(mapStateToProps, null)(BlogSlider)

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
    zIndex: 1,
    maxHeight: '100%'
  }
})
