import React, { Component } from 'react';

export default class VenueGridItem extends Component {
  render() {
    return (
      <div>
        <div style={style.venueGridItem}>
        Hola loquillos
        </div>
        <div style={style.venueGridItem}>
        Hola loquillos
        </div>
        <div style={style.venueGridItem}>
        Hola loquillos
        </div>
        <div style={style.venueGridItem}>
        Hola loquillos
        </div>
      </div>
    );
  }
}
const style = {
  venueGridItem: {
    display: 'flex',
    flex: 1,
    width: '33.3333%'
  }
}
