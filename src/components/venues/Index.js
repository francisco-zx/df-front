import React, { Component } from 'react';

import VenuesSlider from './VenuesSlider';
import VenuesGrid from '../home/HomeVenues'

export default class VenuesPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <section id='venues' alt='venues'>
        <VenuesSlider />
        <VenuesGrid />
      </section>
    );
  }
}
