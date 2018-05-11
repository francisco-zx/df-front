import React from 'react';

import BorderGradient from '../layout/BorderGradient'

import EventVenuePic from '../../assets/events/single_event_venue.jpg';

export default class EventVenue extends React.Component{
  render(){
    return(
      <article style={style.eventVenue}>
        <div style={style.eventDetails}>
          <h3 style={style.eventDetailTitle}>Sábado 28 de Septiembre</h3>
          <h3 style={style.eventDetailTitle}>DirecTV Arena</h3>
        </div>
        <BorderGradient />
        <div style={style.eventLocation}>
          <img src={EventVenuePic} width='100%'/>
          <h3 style={style.eventLocationTitle}>UBICACIóN</h3>
          <p style={style.eventLocationAdress}>Avenida Federico Lacroze 3455,<br/>Ciudad de Buenos Aires</p>
        </div>
      </article>
    )
  }
}
const style = {
  eventVenue: {
    background: '#161616',
    verticalAlign:'top'
  },
  eventDetails: {
    padding: '2rem'
  },
  eventDetailTitle: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 1.5,
    fontSize: '1.5rem'
  },
  eventLocation: {
    padding: '2rem'
  },
  eventLocationTitle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    marginTop: '1.5rem'
  },
  eventLocationAdress: {
    color: 'white',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.5'
  }
}
