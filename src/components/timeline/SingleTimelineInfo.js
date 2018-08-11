import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import base64 from 'base-64';

export default class AboutText extends Component {
  render() {
    return (
        <article className={css(style.aboutText)}>
          {
            this.props.selectedTimeline ?
              <div className={css(style.content) + ' container'}>
                <h2 className={css(style.title)}>{this.props.selectedTimeline.nombre}</h2>
                <h4 className={css(style.subTitle)}>{this.props.selectedTimeline.fecha_formateada} / {this.props.selectedTimeline.venue.nombre}</h4>
                <p
                  className={css(style.text)}
                  dangerouslySetInnerHTML={{ __html: base64.decode(this.props.selectedTimeline.texto)}}
                >
                </p>
                {
                  this.props.selectedTimeline.img_galeria_1 &&
                    <a href='#gallery' className={css(style.link)}>
                      <div className={css(style.viewMore)}>
                        <h4 className={css(style.viewMoreText)}>VER MÁS IMAGENES</h4>
                        <i className='fa fa-angle-down fa-5x'></i>
                      </div>
                    </a>
                }
              </div>
              : 'Cargando...'
            }
          </article>
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
  content: {
  },
  title: {
    color: '#161616',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    "@media(max-width: 480px)": {
      fontSize: '3rem'
    },
    "@media(max-width: 400px)": {
      fontSize: '2.3rem',
    }
  },
  link: {
    color: 'rgb(22, 22, 22)'
  },
  subTitle: {
    fontWeight: 500,
    fontSize: '1.6rem',
    marginBottom: '1rem'
  },
  text: {
    maxWidth: '55%',
    margin: '0 auto',
    padding: '1rem',
    fontSize: '1.1rem',
    lineHeight: 1.4,
    fontFamily: 'Edmonsans',
    "@media(max-width: 480px)": {
      margin: 0,
      maxWidth: 'none',
      textAlign: 'left',
      fontWeight: 500,
      fontSize: '0.9rem',
      lineHeight: '12pt',
      animationDelay: '0.6s'
    }
  },
  viewMore: {
    fontWeight: 'bold',
    marginTop: '3rem'
  }
})
