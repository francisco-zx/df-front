import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SectionTitle from '../layout/SectionTitle';
import VenueGridItem from './VenueGridItem';
import VenuePlaceholder from '../../assets/home/venue_placeholder.jpg';
import BorderGradient from '../layout/BorderGradient';

import LunaPark from '../../assets/home/lunapark.jpg';
import DirecTV from '../../assets/home/directv.jpg';
import Vorterix from '../../assets/home/vorterix.jpg';
import Hipodromo from '../../assets/home/hipodromo.jpg';
import Niceto from '../../assets/home/niceto.jpg';
import Velez from '../../assets/home/velez.jpg';


export default class HomeVenues extends Component {
  render() {
    return (
      <div className='container'>
        <SectionTitle text='Venues'/>
        <div className={css(style.venuesGrid)}>
          <div className={css(style.venuesGridItem)} >
            <div className={css(style.padding)}>
              <img className={css(style.itemImg)} src={LunaPark} />
              <div className={css(style.venueName)}>Luna Park</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem)} >
            <div className={css(style.padding)}>
              <img className={css(style.itemImg)} src={DirecTV} />
              <div className={css(style.venueName)}>DirecTV Arena</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem)} >
            <div className={css(style.padding)}>
              <img className={css(style.itemImg)} src={Vorterix} />
              <div className={css(style.venueName)}>Teatro Vorterix</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem)} >
            <div className={css(style.padding)}>
              <img className={css(style.itemImg)} src={Hipodromo} />
              <div className={css(style.venueName)}>Hipodromo de San Isidro</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem)}>
            <div className={css(style.padding)}>
              <img className={css(style.itemImg)} src={Niceto} />
              <div className={css(style.venueName)}>Niceto Club</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem)}>
            <div className={css(style.padding)}>
            <img className={css(style.itemImg)} src={Velez} />
            <div className={css(style.venueName)}>Estadio Velez</div>
            <BorderGradient height='6px'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const style = StyleSheet.create({
  venuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
  },
  venuesGridItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '33%',
    marginBottom: '2rem',
    flexBasis: '33%',
    overflow: 'hidden',
    transition: 'all 0.4s ease-in-out',
    '@media (max-width: 1024px)': {
      flexBasis: '50%',
      width:'50%'
    },
    '@media (max-width: 480px)': {
        flexBasis: '100%',
        width:'100%'
    }
  },
  padding: {
    padding: '0.5rem',
    "@media(max-width: 480px)": {
      padding: 0
    }
  },
  itemImg: {
    width: '100%',
  },
  venueName:{
    background: '#161616',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    padding: '1rem'
  },

})
