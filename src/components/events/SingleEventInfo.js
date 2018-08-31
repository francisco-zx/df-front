import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import CountTo from 'react-count-to';
import Countdown from 'react-countdown-now';
import base64 from 'base-64';

import EventVenue from './EventVenue';

export default class SingleEventInfo extends Component {

  renderer = ({ days, hours, minutes, seconds, completed }) => {
    return <span>{days} días {hours}:{minutes}:{seconds}</span>;
  }
//On react-countdown-now use date format "mm/dd/yyyy hh:mm:ss" for safari compatibility
  render() {
    //'3/29/2019 12:00:00'
    
    return (

      <div className='container'>
        {
          this.props.selectedEvent ?
            <div className={css(style.content)}>
              <article className={css(style.details)}>
                <h1 className={css(style.title) + ' animated fadeIn'}>{this.props.selectedEvent.nombre}</h1>
                <h1 className={css(style.title) + ' animated fadeIn'}style={{animationDelay: '0.2s'}}>-</h1>
                <h3 className={css(style.subTitle) + ' animated fadeIn'}>
                  Faltan: <Countdown date={this.props.selectedEvent.fecha_timestamp} daysAsHours={false} renderer={this.renderer}/></h3>
                <p
                  className={css(style.description) + ' animated fadeIn'}
                  dangerouslySetInnerHTML={{ __html: base64.decode(this.props.selectedEvent.texto)}}
                >
                </p>
              </article>
              <article className={css(style.venue)}>
                <EventVenue selectedEvent={this.props.selectedEvent}/>
              </article>
              <article className={css(style.mobileDescription)}>
                <p
                  className={css(style.mobileDescriptionText) + ' animated fadeIn'}
                  dangerouslySetInnerHTML={{ __html: base64.decode(this.props.selectedEvent.texto)}}
                >
                </p>
              </article>
              <article className={css(style.mobileShareEvent)}>
                <div className={css(style.mobileShaasdaseEvent) + ' animated fadeIn'}>
                  Compartir:
                  <a title="send to Facebook" target="_blank" className='clickable'
                    href={`http://www.facebook.com/sharer.php?u=${document.location.href}&t=${this.props.selectedEvent.nombre},&nbsp${this.props.selectedEvent.fecha_formateada}`} >
                    <i className={css(style.icon) + ' fa fa-facebook'}> </i>
                  </a>
                  <a target='_blank' title="send to Twitter" 
                    href={`https://twitter.com/intent/tweet?text=${this.props.selectedEvent.nombre}, ${this.props.selectedEvent.fecha_formateada}&url=${document.location.href}&hashtags=dfentertainment,allaccess,${this.props.selectedEvent.nombre}`} >
                    <i className={css(style.icon) + ' fa fa-twitter'}  ></i>
                  </a>
                </div>
              </article>
            </div>
          : 'Cargando...'
        }
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
      margin: '0',
      marginTop: '3rem'
    },
    "@media(max-width: 480px)": {
      flex: 1,
      margin: '0',
      width: '100%',
      marginTop: '3rem'
    }
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    "@media(max-width: 480px)": {
      fontSize: '3rem'
    },
    "@media(max-width: 400px)": {
      fontSize: '2.3rem',
    }
  },
  subTitle: {
    fontWeight: 500,
    fontSize: '2rem',
    marginBottom: '1rem',
    animationDelay: '0.4s',
    transition: 'all 0.1s ease',
    "@media(max-width: 480px)": {
      fontSize: '1.8rem'
    },
    "@media(max-width: 480px)": {
      fontSize: '1.4rem',
        display: 'flex'
    }
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
    paddingRight: '0rem',//Update 2rem
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
