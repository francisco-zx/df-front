import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleVenueSlider from './SingleVenueSlider';
import SingleVenueContent from './SingleVenueContent';


class SingleVenue extends Component{
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
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleVenue);
