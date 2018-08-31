import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleTimeLineSlider from './SingleTimeLineSlider';
import SingleTimelineInfo from './SingleTimelineInfo';
import SingleTimelineGallery from './SingleTimelineGallery';
import BorderGradient from '../layout/BorderGradient';
//import Overlay from '../layout/Overlay';

import { fetchSelectedTimeline } from '../../Actions/Timeline_Action';

class SingleTimeline extends Component {

  componentDidMount(){
    const slug = this.props.match.params.slug
    this.props.fetchSelectedTimeline(slug)
  }

  render() {
    return (
      <section>
        <SingleTimeLineSlider
          selectedTimeline={this.props.selectedTimeline}
        />
        <BorderGradient />
        <SingleTimelineInfo
          selectedTimeline={this.props.selectedTimeline}
        />
        <SingleTimelineGallery
          selectedTimeline={this.props.selectedTimeline}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  selectedTimeline: state.selectedTimeline
})
const mapDispatchToProps = dispatch => ({
  fetchSelectedTimeline: slug => dispatch(fetchSelectedTimeline(slug))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleTimeline)
