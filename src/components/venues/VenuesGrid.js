import React, { Component } from 'react';

import SectionTitle from '../layout/SectionTitle';
import VenuePlaceholder from '../../assets/home/venue_placeholder.jpg';
import BorderGradient from '../layout/BorderGradient';

import LunaPark from '../../assets/home/lunapark.jpg';
import DirecTV from '../../assets/home/directv.jpg';
import Vorterix from '../../assets/home/vorterix.jpg';
import Hipodromo from '../../assets/home/hipodromo.jpg';
import Niceto from '../../assets/home/niceto.jpg';
import Velez from '../../assets/home/velez.jpg';


export default class VenuesGrid extends Component {
  render() {
    return (
      <div className='container'>
        <SectionTitle text='Venues'/>
        <div style={style.venuesGrid}>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={LunaPark} />
              <div style={style.venueName}>Luna Park</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={DirecTV} />
              <div style={style.venueName}>DirecTV Arena</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={Vorterix} />
              <div style={style.venueName}>Teatro Vorterix</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={Hipodromo} />
              <div style={style.venueName}>Hipodromo de San Isidro</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={Niceto} />
              <div style={style.venueName}>Niceto Club</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
            <img style={style.itemImg} src={Velez} />
            <div style={style.venueName}>Estadio Velez</div>
            <BorderGradient height='6px'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const style = {
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
    overflow: 'hidden'
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

}
