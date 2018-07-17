import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { selectVenue } from '../../Actions/Venues_Action';

import BorderGradient from '../layout/BorderGradient';

class VenueGridItem extends Component{
  select = (venue) => {
    this.props.selectVenue(venue);
    this.props.history.push(`/venue/${venue.slug}`)
  }
  render(){
    return(
      <div className={!this.props.small ? css(style.venuesGridItem) : css(style.venuesGridItemSmall)} onClick={() => this.select(this.props.venue)}>
        <div className='hover-shadow'>
          <img className={css(style.itemImg)} src={this.props.venue.img_principal} />
          <div className={css(style.venueName)}>{this.props.venue.nombre}</div>
          <BorderGradient height='6px'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
})
const mapDispatchToProps = dispatch => ({
  selectVenue: (venue) => dispatch(selectVenue(venue))
});
export default connect(mapStateToProps, mapDispatchToProps)(VenueGridItem);


const style =  StyleSheet.create({
  venuesGridItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '50%',
    maxWidth: '50%',
    marginBottom: '2rem',
    overflow: 'hidden',
    transition: 'all 0.4s ease-in-out',
    '@media (max-width: 1024px)': {
      flexBasis: '50%',
      width:'50%',
      maxWidth: '50%',
    },
    ':nth-child(odd)': {
      "@media(min-width: 480px)": {
          marginRight: '1rem'
      }
    },
    ':nth-child(even)': {
      "@media(min-width: 480px)": {
          marginLeft: '1rem'
      }
    },
    '@media (max-width: 480px)': {
        flexBasis: '100%',
        width:'100%',
        maxWidth: '100%',
        marginRight: 0,
        marginLeft: 0,
    }
  },
  venuesGridItemSmall: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginBottom: '2rem',
    overflow: 'hidden',
    transition: 'all 0.4s ease-in-out',
    padding: '1rem',
    '@media (max-width: 1024px)': {
      flexBasis: '50%',
      width:'50%'
    },
    '@media (max-width: 480px)': {
        flexBasis: '100%',
        width:'100%'
    },
    ":first-child": {
      paddingLeft: 0
    },
    ":last-child": {
      paddingRight: 0
    }
  },
  itemImg: {
    width: '100%',
    maxHeight: '21rem',
    objectFit: 'cover',
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
