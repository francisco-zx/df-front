import React, { Component } from 'react';

import SectionTitle from '../layout/SectionTitle';
import EventsSlider  from './EventsSlider';

export default class HomeEvents extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <SectionTitle text='Eventos' link='/events'/>
          <EventsSlider />
        </div>
      </div>
    );
  }
}
