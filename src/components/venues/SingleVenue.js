import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleVenueSlider from './SingleVenueSlider';
import SingleVenueContent from './SingleVenueContent';

import { fetchSelectedVenue } from '../../Actions/Venues_Action';

class SingleVenue extends Component{
  componentWillMount(){
    const slug = this.props.match.params.slug
    !this.props.selectedVenue.length ?
      this.props.fetchSelectedVenue(slug)
    : console.log(this.props.selectedVenue)
  }
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render(){
    return(
      <section>
        <SingleVenueSlider selectedVenue={this.props.selectedVenue}/>
        <SingleVenueContent selectedVenue={this.props.selectedVenue}/>
      </section>
    )
  }
}
const mapStateToProps = state =>({
  selectedVenue: state.selectedVenue
})
const mapDispatchToProps = dispatch => ({
  fetchSelectedVenue: (slug) => dispatch(fetchSelectedVenue(slug))
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleVenue);
