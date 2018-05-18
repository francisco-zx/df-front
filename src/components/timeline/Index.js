import React, { Component } from 'react';

import TimelineSlider from './TimeLineSlider';

export default class TimeLinePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTimeline: 1
    }
  }
  render() {
    return (
      <div>
        <TimelineSlider />

      </div>
    );
  }
}
