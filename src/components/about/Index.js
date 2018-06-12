import React, { Component } from 'react';

import AboutHeader from './AboutHeader';
import BorderGradient from '../layout/BorderGradient';
import AboutText from './AboutText';
import AboutGradient from './AboutGradient';
import AboutGroup from './AboutGroup';

export default class AboutPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <section>
        <AboutHeader />
          <BorderGradient />
        <AboutText />
        <AboutGradient />
        <AboutGroup />
      </section>
    );
  }
}
