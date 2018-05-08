import React, { Component } from 'react';

import VenuesSlider from './VenuesSlider';
import VenuesGrid from './VenuesGrid'

export default class VenuesPage extends Component {
  render() {
    return (
      <section id='venues' alt='venues'>
        <VenuesSlider />
        <VenuesGrid />
      </section>
    );
  }
}
