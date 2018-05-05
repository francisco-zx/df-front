import React, { Component } from 'react';

import AboutHeader from './AboutHeader';
import BorderGradient from '../layout/BorderGradient';
import AboutText from './AboutText';
import AboutGradient from './AboutGradient';
import AboutCEO from './AboutCEO';
import AboutGroup from './AboutGroup';

export default class AboutPage extends Component {
  render() {
    return (
      <section>
        <AboutHeader />
          <BorderGradient />
        <AboutText />
        <AboutGradient />
        <AboutCEO />
        <AboutGroup />
      </section>
    );
  }
}
