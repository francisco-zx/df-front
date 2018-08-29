import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MapMarkerSVG from '../../assets/events/map-marker-gradient.svg';

export default class MapMarker extends Component {
  render(){
    return(
      <div style={{transform: 'translateY(-100%)'}}>
        <img  src={MapMarkerSVG} className={css(style.mapMarker) + ' animated bounceIn'} height='60px' alt='' />
      </div>
    )
  }
}

const style = StyleSheet.create({
  mapMarker: {
    position: 'relative',
    transform: 'translateY(100%)'
  },
  name: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.5rem',
    width: 'auto',
    fontWeight: 'bold',
    color: 'white',
  }
})
