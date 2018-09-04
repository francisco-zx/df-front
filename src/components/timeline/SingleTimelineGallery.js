import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BorderGradient from  '../layout/BorderGradient';


export default class SingleTimelineGallery extends Component {
  render() {
    //console.log('this.props.selectedTimeline ', this.props.selectedTimeline);
    return (
        <section id='gallery'>
        {
          this.props.selectedTimeline && 
            <div>
              <h3 className={css(style.title)}>GALERÍA</h3>
              <BorderGradient />
              {
                this.props.selectedTimeline ?
                  <div>
                    <div>
                      <div className={css(style.galleryGrid)}>
                        <img className={css(style.img1, style.img)} src={this.props.selectedTimeline.img_galeria_1} height='auto'/>
                      </div>
                      <div className={css(style.galleryGrid)}>
                        <img className={css(style.img2, style.img)} src={this.props.selectedTimeline.img_galeria_2} height='auto'/>
                        <img className={css(style.img2, style.img)} src={this.props.selectedTimeline.img_galeria_3} height='auto'/>
                      </div>
                    </div>
                    <div className={css(style.galleryGrid)}>
                      <img className={css(style.img1, style.img)} src={this.props.selectedTimeline.img_galeria_4} height='auto'/>
                    </div>
                  </div>
                : 'Cargando...'
              }
            </div>
        }
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
