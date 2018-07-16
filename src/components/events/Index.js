import React, { Component } from 'react';

import EventsSlider from './EventsSlider';
import EventsGrid from './EventsGrid';

export default class EventsPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div>
        <EventsSlider history={this.props.history}/>
        <EventsGrid history={this.props.history}/>
      </div>
    );
  }
}
