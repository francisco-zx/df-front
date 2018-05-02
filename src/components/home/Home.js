import React, { Component } from 'react';

import HomeSlider from './HomeSlider';
import HomeEvents from './HomeEvents';
import HomeVenues from './HomeVenues';
import HomeLinks from './HomeLinks';

export default class HomePage extends Component {
  render() {
    return (
      <section >
        <HomeSlider />
        <HomeEvents />
        <HomeVenues />
        <HomeLinks />
      </section>
    );
  }
}
