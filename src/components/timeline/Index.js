import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimelineSlider from './TimeLineSlider';

class TimeLinePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedTimeline: 1
    }
  }
  render() {
    return (
      <div>
        <TimelineSlider timeline={this.props.timeline}/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  timeline: state.timeline
})

export default connect(mapStateToProps, null)(TimeLinePage);
