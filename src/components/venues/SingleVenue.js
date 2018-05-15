import React, { Component } from 'react';

import SingleVenueSlider from './SingleVenueSlider';
import SingleVenueContent from './SingleVenueContent';


export default class SingleVenue extends Component{
  render(){
    return(
      <section>
        <SingleVenueSlider />
        <SingleVenueContent />
      </section>  
    )
  }
}
