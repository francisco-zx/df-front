import React, { Component } from 'react';

import BorderGradient from  '../layout/BorderGradient';

import Gallery1 from '../../assets/timeline/single_timeline_gallery_1.png';
import Gallery2 from '../../assets/timeline/single_timeline_gallery_2.png';
import Gallery3 from '../../assets/timeline/single_timeline_gallery_3.png';
import Gallery4 from '../../assets/timeline/single_timeline_gallery_4.png';

export default class SingleTimelineGallery extends Component {
  render() {
    return (
      <section>
        <h3 style={style.title}>GALERIA</h3>
        <BorderGradient />
        <div>
          <div style={style.galleryGrid}>
            <img style={style.img1} src={Gallery1} />
          </div>
          <div style={style.galleryGrid}>
            <img style={style.img2} src={Gallery2} />
            <img style={style.img2} src={Gallery3} />
          </div>
        </div>
        <div style={style.galleryGrid}>
          <img style={style.img1} src={Gallery4} />
        </div>
      </section>
    );
  }
}
const style = {
  aboutText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  galleryGrid: {
    display: 'flex',
    flex:1
  },
  img1: {
    display: 'flex',
    flex: 1
  },
  img2: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
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
}
