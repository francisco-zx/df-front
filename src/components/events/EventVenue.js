import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import BorderGradient from '../layout/BorderGradient'
import EventVenuePic from '../../assets/events/single_event_venue.jpg';
import Calendar from '../../assets/events/calendar.svg';
import mapMarker from '../../assets/events/map-marker.svg';

export default class EventVenue extends React.Component{
  render(){
    return(
      <article className={css(style.eventVenue) + ' animated fadeIn'}>
        <div className={css(style.eventDetails)}>
          <h3 className={css(style.eventDetailTitle) + ' animated fadeIn'}>
            <img src={Calendar} className={css(style.venueIcon)} height='18rem'/>
            <span>
            {this.props.selectedEvent.fecha_formateda}
            </span>
          </h3>
          <h3 className={css(style.eventDetailTitle) + ' animated fadeIn'}>

            <img src={mapMarker} className={css(style.venueIcon)} width='18rem'/>
            <span>
              {this.props.selectedEvent.venue.nombre}
            </span>
          </h3>
        </div>
        <BorderGradient />
        <div className={css(style.eventLocation)}>
          {
            this.props.selectedEvent.venue.img_plano &&
              <img src={this.props.selectedEvent.venue.img_plano} width='100%' className={css(style.eventVenueImg) + ' animated fadeIn'}/>

          }
          <h3 className={css(style.eventLocationTitle) + ' animated fadeIn'}>UBICACIóN</h3>
          <p className={css(style.eventLocationAdress) + ' animated fadeIn'}>{this.props.selectedEvent.venue.ubicacion}</p>
        </div>
      </article>
    )
  }
}
const style = StyleSheet.create({
  eventVenue: {
    background: '#161616',
    verticalAlign:'top',
    animationDelay: '0.8s',
    "@media(max-width: 1024px)": {
      marginTop: '1.5rem',
      margin: '0 auto'
    }
  },
  eventDetails: {
    padding: '2rem',
    "@media(max-width: 480px)": {
      padding: '1rem',
    }
  },
  eventDetailTitle: {
    display: 'flex',
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 1.5,
    fontSize: '1.5rem',
    animationDelay: '1s',
    alignItems: 'center',
    "@media(max-width: 480px)": {
      fontSize: '1.1rem',
      lineHeight: 2
    },
    "@media(max-width: 400px)": {
      fontSize: '1rem',
    }
  },
  eventLocation: {
    padding: '2rem',
    "@media(max-width: 480px)": {
      padding: '1rem',
    }
  },
  venueIcon: {
    paddingRight: '10px'
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
    animationDelay: '1.4s',
    "@media(max-width: 480px)": {
      fontSize: '1rem'
    }
  },
  eventLocationAdress: {
    color: 'white',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.5',
    animationDelay: '1.6s'
  }
})
