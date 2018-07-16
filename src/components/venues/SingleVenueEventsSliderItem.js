import React, { Component } from 'react';

import BorderGradient from '../layout/BorderGradient';

export default class SingleVenueEventsSliderItem extends Component {
  render() {
    return (
      <div style={style.eventSliderItem}>
        <div style={{padding: '0.5rem'}}>
          <img style={style.itemImg}/>
          <div style={style.eventTitle}>Phil Collins</div>
          <BorderGradient height='6px'/>
        </div>
      </div>
    );
  }
}

const style = {
  eventSliderItem: {
    display: 'inline-block',
    textAlign: 'center',
    whiteSpace: 'normal'
  },
  date: {
    fontSize: '1.5rem',
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  },
  location: {
    marginBottom: '2rem'
  },
  button: {
    color: 'white',
    fontSize: '0.7rem',
    border: '1px solid #161616',
    fontWeight: 'bold',
    background: '#161616',
    padding: '0.3rem 0.6rem',
    borderRadius: '10px',
    marginRight: '1rem',
    marginTop: '1rem'
  },
  itemImg: {
    height: '22rem'
  },
  eventTitle:{
    background: '#161616',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    padding: '1rem'
  },
}
