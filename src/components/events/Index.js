import React, { Component } from 'react';

import EventsSlider from './EventsSlider';
import EventsGrid from './EventsGrid';

export default class EventsPage extends Component {
  render() {
    return (
      <div>
        <EventsSlider />
        <EventsGrid />
      </div>
    );
  }
}
