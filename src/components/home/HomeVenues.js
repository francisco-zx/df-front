import React, { Component } from 'react';

import SectionTitle from '../layout/SectionTitle';
import VenueGridItem from './VenueGridItem';
import VenuePlaceholder from '../../assets/home/venue_placeholder.jpg';
import BorderGradient from '../layout/BorderGradient';


export default class HomeVenues extends Component {
  render() {
    return (
      <div className='container'>
        <SectionTitle text='Venues'/>
        <div style={style.venuesGrid}>
          <div style={style.venuesGridItem}>
            <img style={style.itemImg} src={VenuePlaceholder} />
            <div style={style.venueName}>Luna Park</div>
            <BorderGradient />
          </div>
          <div style={style.venuesGridItem}>
            <img style={style.itemImg} src={VenuePlaceholder} />
            <div style={style.venueName}>DirecTV Arena</div>
            <BorderGradient />
          </div>
          <div style={style.venuesGridItem}>
            <img style={style.itemImg} src={VenuePlaceholder} />
            <div style={style.venueName}>Teatro Vorterix</div>
            <BorderGradient />
          </div>
          <div style={style.venuesGridItem}>
            <img style={style.itemImg} src={VenuePlaceholder} />
            <div style={style.venueName}>Hipodromo de San Isidro</div>
            <BorderGradient />
          </div>
          <div style={style.venuesGridItem}>
            <img style={style.itemImg} src={VenuePlaceholder} />
            <div style={style.venueName}>Niceto Club</div>
            <BorderGradient />
          </div>
          <div style={style.venuesGridItem}>
            <img style={style.itemImg} src={VenuePlaceholder} />
            <div style={style.venueName}>Estadio Velez</div>
            <BorderGradient />
          </div>
        </div>
      </div>
    );
  }
}
const style = {
  venuesGrid: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  venuesGridItem: {
    alignItems: 'flex-start',
    marginBottom: '2rem',
  },
  venueName:{
    background: '#161616',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '1rem',
    color: 'white'
  },

}
