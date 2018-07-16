import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import BorderGradient from '../layout/BorderGradient'

export default class SingleVenueDetail extends React.Component{
  render(){
    return(
      <article className={css(style.venueMap) + ' animated fadeIn'}>
        {
          this.props.selectedVenue.img_plano &&
            <div className={css(style.eventLocation) + ' animated fadeIn'}>
              <img src={this.props.selectedVenue.img_plano} width='100%'/>
            </div>
        }
        {
          this.props.selectedVenue.capacidad &&
            <div>
              <BorderGradient />
              <div className={css(style.eventLocation)}>
                <h3 className={css(style.eventLocationTitle) + ' animated fadeIn'}>CAPACIDAD</h3>
                <p className={css(style.eventLocationAdress) + ' animated fadeIn'}>{this.props.selectedVenue.capacidad} Espectadores</p>
              </div>
            </div>
        }
      </article>
    )
  }
}
const style = StyleSheet.create({
  venueMap: {
    background: '#161616',
    verticalAlign:'top',
    animationDelay: '0.6s',
    width: '100%'
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
    padding: '1rem',
    animationDelay: '0.8s'
  },
  eventLocationTitle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    marginTop: '0.8rem',
    animationDelay: '1s'
  },
  eventLocationAdress: {
    color: 'white',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.5',
    animationDelay: '1.2s'
  }
})
