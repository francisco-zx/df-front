import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class AboutText extends Component {
  render() {
    return (
      <article className={css(style.aboutText)}>
        <div className={css(style.content) + ' container'}>
          <h2 className={css(style.title) + ' animated fadeIn'}>DF Entertainment</h2>
          <h4 className={css(style.subTitle) + ' animated fadeIn'}>Un compromiso con la diversión.</h4>
          <p className={css(style.text) + ' animated fadeIn'}>
            La productora de los shows más importantes del país y de Lollapalooza Argentina se describe como una empresa que está atenta a las nuevas tendencias y costumbres de la industria del entretenimiento. Con un equipo de gente joven e inquieta, DF Entertainment se encuentra en pleno crecimiento y el día a día se basa en encontrar la manera de hacer las cosas de una forma diferente y creativa. Todo comienza desde la elección de los artistas que visitan nuestro país todos los años.
          </p>
        </div>
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
      display: 'none'
    }
  },
  subTitle: {
    fontWeight: 500,
    fontSize: '1.6rem',
    marginBottom: '1rem',
    animationDelay: '0.3s'
  },
  text: {
    maxWidth: '55%',
    margin: '0 auto',
    padding: '1rem',
    fontSize: '1.1rem',
    lineHeight: 1.4,
    animationDelay: '0.6s',
    "@media(max-width: 480px)": {
      maxWidth: 'none',
      padding: 0
    }
  }
})
