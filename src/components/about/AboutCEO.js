import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import CEOImg from '../../assets/about/CEOImg.png';

export default class AboutText extends Component {
  render() {
    return (
      <article className={style.aboutCEO}>
        <div className={css(style.content) + ' container'}>
        <p className={css(style.text) + ' animated fadeIn'}>
          La productora de los shows más importantes del país y de Lollapalooza Argentina se describe como una empresa que está atenta a las nuevas tendencias y costumbres de la industria del entretenimiento. Con un equipo de gente joven e inquieta, DF Entertainment se encuentra en pleno crecimiento y el día a día se basa en encontrar la manera de hacer las cosas de una forma diferente y creativa. Todo comienza desde la elección de los artistas que visitan nuestro país todos los años.
        </p>
        </div>
      </article>
    );
  }
}
const style = StyleSheet.create({
  aboutCEO: {
    background: '#e9e9eb'
  },
  content: {
    display: 'flex',
    flex: 1
  },
  left: {
    display: 'flex',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    display: 'flex',
    flex: 4,
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    color: '#161616',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
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
    animationDelay: '0.6s',
    textAlign: 'center'
  }
})
