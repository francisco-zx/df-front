import React, { Component } from 'react';

import SingleEventSlider from './SingleEventSlider';
import SingleEventInfo from './SingleEventInfo';
import RelatedEventsSlider from './RelatedEventsSlider';

export default class SingleEventPage extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <SingleEventSlider />
        <SingleEventInfo />
        <RelatedEventsSlider />
      </div>
    );
  }
}
