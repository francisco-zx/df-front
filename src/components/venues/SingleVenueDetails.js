import React from 'react';

import BorderGradient from '../layout/BorderGradient'

import EventVenuePic from '../../assets/events/single_event_venue.jpg';

export default class SingleVenueDetail extends React.Component{
  render(){
    return(
      <article style={style.eventVenue}>
        <div style={style.eventLocation}>
          <img src={EventVenuePic} width='100%'/>
        </div>
        <BorderGradient />
        <div style={style.eventLocation}>
          <h3 style={style.eventLocationTitle}>CAPACIDAD</h3>
          <p style={style.eventLocationAdress}>1584 Espectadores</p>
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
    padding: '1rem'
  },
  eventDetailTitle: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 1.5,
    fontSize: '1.5rem'
  },
  eventLocation: {
    padding: '1rem'
  },
  eventLocationTitle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    marginTop: '0.8rem'
  },
  eventLocationAdress: {
    color: 'white',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.5'
  }
}
