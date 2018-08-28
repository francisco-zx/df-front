import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import SectionTitle from '../layout/SectionTitle';
import VenueGridItem from './VenueGridItem';
import BorderGradient from '../layout/BorderGradient';


class HomeVenues extends Component {

  constructor(props){
    super(props);
    this.state = {
      isVenues: false
    }
  }

  componentDidMount(){
    const path = document.location.href.split('/')[3];
    console.log(path)
    if(path === 'venues'){
      this.setState({
        isVenues: true
      })
    }
  }
  render() {
    return (
      <div className='container'>
        <SectionTitle text='Venues' link='/venues'/>
        <div className={css(style.venuesGrid)}>
        {
          this.props.venues.length &&
            this.props.venues.map((venue, index) => {
              if(venue.visible === 1){
                return(
                  <VenueGridItem key={index} venue={venue} history={this.props.history} small={false}/>
                )
              }

            })
        }
        </div>
        <div className={css(style.venuesGrid)}>
        {
          this.state.isVenues &&
          this.props.venues.length &&
            this.props.venues.map((venue, index) => {
              if(!venue.visible){
                return(
                  <VenueGridItem key={index} venue={venue} history={this.props.history} small={true}/>
                )
              }
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
  padding: {
    padding: '0.5rem',
    "@media(max-width: 480px)": {
      padding: 0
    }
  }
})
