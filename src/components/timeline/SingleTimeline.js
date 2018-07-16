import React, { Component } from 'react';

import SingleTimeLineSlider from './SingleTimeLineSlider';
import SingleTimelineInfo from './SingleTimelineInfo';
import SingleTimelineGallery from './SingleTimelineGallery';
import BorderGradient from '../layout/BorderGradient';
import Overlay from '../layout/Overlay';

export default class SingleTimeline extends Component {
  render() {
    return (
      <section>
        <SingleTimeLineSlider />
        <BorderGradient />
        <SingleTimelineInfo />
        <SingleTimelineGallery />
      </section>
    );
  }
}
const style = {

}
