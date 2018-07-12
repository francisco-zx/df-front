import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BorderGradient from  '../layout/BorderGradient';

import Gallery1 from '../../assets/timeline/single_timeline_gallery_1.png';
import Gallery2 from '../../assets/timeline/single_timeline_gallery_2.png';
import Gallery3 from '../../assets/timeline/single_timeline_gallery_3.png';
import Gallery4 from '../../assets/timeline/single_timeline_gallery_4.png';

export default class SingleTimelineGallery extends Component {
  render() {
    return (
      <section>
        <h3 className={css(style.title)}>GALERIA</h3>
        <BorderGradient />
        <div>
          <div className={css(style.galleryGrid)}>
            <img className={css(style.img1, style.img)} src={Gallery1} height='auto'/>
          </div>
          <div className={css(style.galleryGrid)}>
            <img className={css(style.img2, style.img)} src={Gallery2} height='auto'/>
            <img className={css(style.img2, style.img)} src={Gallery3} height='auto'/>
          </div>
        </div>
        <div className={css(style.galleryGrid)}>
          <img className={css(style.img1, style.img)} src={Gallery4} height='auto'/>
        </div>
      </section>
    );
  }
}
const style = StyleSheet.create({
  aboutText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  galleryGrid: {
    display: 'flex',
    flex:1,
    alignItems: 'flex-start',
  },
  img: {
    objectFit: 'cover'
  },
  img1: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    alignSelf: 'center'
  },
  img2: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    "@media(max-width:1024px)": {
      flexDirection: 'column',
    }
  },
  title: {
    background: '#161616',
    padding: '2rem',
    textAlign: 'center',
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
  },

  viewMore: {
    fontWeight: 'bold',
    marginTop: '3rem'
  }
})
