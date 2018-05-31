import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import CountTo from 'react-count-to';
import Countdown from 'react-countdown-now';

import EventVenue from './EventVenue';

export default class SingleEventInfo extends Component {

  renderer = ({ days, hours, minutes, seconds, completed }) => {
    return <span>{days} días {hours}:{minutes}:{seconds}</span>;
  }

  render() {
    return (

      <div className='container'>
        <div className={css(style.content)}>
          <article className={css(style.details)}>
            <h1 className={css(style.title) + ' animated fadeIn'}>Harry Styles</h1>
            <h1 className={css(style.title) + ' animated fadeIn'}style={{animationDelay: '0.2s'}}>-</h1>
            <h3 className={css(style.subTitle) + ' animated fadeIn'}>
              Faltan: <Countdown date={1528394400000} daysAsHours={false} renderer={this.renderer}/></h3>
            <p className={css(style.description) + ' animated fadeIn'}>
            Debido a la increíble demanda, Harry Styles ha añadido 56 nuevas fechas en 2018 a su ya agotada gira de 2017. Las fechas recién agregadas comenzarán en marzo 2018 en Basel, Suiza y concluirán en Los Angeles, California en julio. Las nuevas fechas contarán con invitados especiales como Kacey Musgraves (Estados Unidos y Canada), Warpaint (Asia) y Leon Bridges (Sudamérica y México) e invitados especiales para Europa y Australia a ser anunciados próximamente. La primera parte de Harry Styles Live On Tour, la cual se agotó en tiempo record, empezará en septiembre 2017 visitando venues íntimos alrededor del mundo y contará con MUNA como banda soporte.
            El álbum homónimo de Harry Styles fue lanzado el 12 de mayo y llegó rápidamente a la cima de los charts alrededor del mundo. En Estados Unidos llegó a lo más alto del Billboard 200 con la venta de más de 230.000 discos online y 193.000 CDs físicos, haciendo historia como el mayor debut de ventas semanal de un disco de larga duración para un artista masculino del Reino Unido desde el éxito de Nielsen Music en 1991. El disco llegó a ser #1 en más de 20 países incluyendo Estados Unidos, Reino Unido, Irlanda, Canadá, Australia, España, México, Brasil, Holanda, Bélgica, Polonia y alrededor de América Latina, el sudeste asiático y el Medio Oriente.
            </p>
          </article>
          <article className={css(style.venue)}>
            <EventVenue />
          </article>
          <article className={css(style.mobileDescription)}>
            <p className={css(style.mobileDescriptionText) + ' animated fadeIn'}>
            Debido a la increíble demanda, Harry Styles ha añadido 56 nuevas fechas en 2018 a su ya agotada gira de 2017. Las fechas recién agregadas comenzarán en marzo 2018 en Basel, Suiza y concluirán en Los Angeles, California en julio. Las nuevas fechas contarán con invitados especiales como Kacey Musgraves (Estados Unidos y Canada), Warpaint (Asia) y Leon Bridges (Sudamérica y México) e invitados especiales para Europa y Australia a ser anunciados próximamente. La primera parte de Harry Styles Live On Tour, la cual se agotó en tiempo record, empezará en septiembre 2017 visitando venues íntimos alrededor del mundo y contará con MUNA como banda soporte.
            El álbum homónimo de Harry Styles fue lanzado el 12 de mayo y llegó rápidamente a la cima de los charts alrededor del mundo. En Estados Unidos llegó a lo más alto del Billboard 200 con la venta de más de 230.000 discos online y 193.000 CDs físicos, haciendo historia como el mayor debut de ventas semanal de un disco de larga duración para un artista masculino del Reino Unido desde el éxito de Nielsen Music en 1991. El disco llegó a ser #1 en más de 20 países incluyendo Estados Unidos, Reino Unido, Irlanda, Canadá, Australia, España, México, Brasil, Holanda, Bélgica, Polonia y alrededor de América Latina, el sudeste asiático y el Medio Oriente.
            </p>
          </article>
          <article className={css(style.mobileShareEvent)}>
            <div className={css(style.mobileShaasdaseEvent) + ' animated fadeIn'}>
              Compartir:
              <i className={css(style.icon) + ' fa fa-facebook'}></i>
              <i className={css(style.icon) + ' fa fa-twitter'}></i>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
const style = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    "@media(max-width: 1024px)": {
      flexDirection: 'column',
    }
  },
  details: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
    "@media(max-width: 1024px)": {
      flex: 1,
    },
    "@media(max-width: 480px)": {
      marginTop: '3rem',
    }
  },
  venue: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    "@media(max-width: 1024px)": {
      flex: 1,
    }
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    "@media(max-width: 480px)": {
      fontSize: '3rem'
    }
  },
  subTitle: {
    fontWeight: 500,
    fontSize: '2rem',
    marginBottom: '1rem',
    animationDelay: '0.4s',
    transition: 'all 0.1s ease'
  },
  description: {
    marginTop: '3rem',
    fontWeight: 500,
    lineHeight: '24pt',
    paddingRight: '2rem',
    animationDelay: '0.6s',
    "@media(max-width: 480px)": {
      display: 'none',
    }
  },
  mobileDescription: {
    "@media(min-width: 480px)": {
      display: 'none'
    }
  },
  mobileDescriptionText: {
    marginTop: '3rem',
    fontWeight: 500,
    fontSize: '0.9rem',
    lineHeight: '12pt',
    paddingRight: '2rem',
    animationDelay: '0.6s'

  },
  mobileShareEvent: {
    padding: '1rem 2rem',
    color: '#161616',
    fontFamily: 'Avenir',
    fontWeight: 600,
    border: '1px solid #161616',
    margin: '2rem auto',
    borderRadius: '50px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    "@media(min-width: 480px)": {
      display: 'none'
    }
  },
  icon: {
    padding: '0 0.5rem',
    fontSize:'1.3rem'
  },
})
