import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

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


class HomeVenues extends Component {
  render() {
    return (
      <div className='container'>
        <SectionTitle text='Venues' link='/venues'/>
        <div className={css(style.venuesGrid)}>
        {
          this.props.venues.length &&
            this.props.venues.map((venue, index) => {
              return(
                <div className={css(style.venuesGridItem)}>
                  <div style={{padding: '0.5rem'}} className='hover-shadow'>
                    <img className={css(style.itemImg)} src={venue.img_principal} />
                    <div className={css(style.venueName)}>{venue.nombre}</div>
                    <BorderGradient height='6px'/>
                  </div>
                </div>
              )
            })
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  venues: state.venues,
  events: state.events,
  blog: state.blog
})
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeVenues);

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
    padding: '1rem',
  },

})
