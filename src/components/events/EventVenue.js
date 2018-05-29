import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import BorderGradient from '../layout/BorderGradient'
import EventVenuePic from '../../assets/events/single_event_venue.jpg';

export default class EventVenue extends React.Component{
  render(){
    return(
      <article className={css(style.eventVenue) + ' animated fadeIn'}>
        <div className={css(style.eventDetails)}>
          <h3 className={css(style.eventDetailTitle) + ' animated fadeIn'}>Sábado 28 de Septiembre</h3>
          <h3 className={css(style.eventDetailTitle) + ' animated fadeIn'}>DirecTV Arena</h3>
        </div>
        <BorderGradient />
        <div className={css(style.eventLocation)}>
          <img src={EventVenuePic} width='100%' className={css(style.eventVenueImg) + ' animated fadeIn'}/>
          <h3 className={css(style.eventLocationTitle) + ' animated fadeIn'}>UBICACIóN</h3>
          <p className={css(style.eventLocationAdress) + ' animated fadeIn'}>Avenida Federico Lacroze 3455,<br/>Ciudad de Buenos Aires</p>
        </div>
      </article>
    )
  }
}
const style = StyleSheet.create({
  eventVenue: {
    background: '#161616',
    verticalAlign:'top',
    animationDelay: '0.8s'
  },
  eventDetails: {
    padding: '2rem',
  },
  eventDetailTitle: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 1.5,
    fontSize: '1.5rem',
    animationDelay: '1s'
  },
  eventLocation: {
    padding: '2rem'
  },
  eventVenueImg: {
    animationDelay: '1.2s'
  },
  eventLocationTitle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    marginTop: '1.5rem',
    animationDelay: '1.4s'
  },
  eventLocationAdress: {
    color: 'white',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.5',
    animationDelay: '1.6s'
  }
})
