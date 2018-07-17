import React, { Component } from 'react';
import { connect } from 'react-redux';

import AboutHeader from './AboutHeader';
import BorderGradient from '../layout/BorderGradient';
import AboutText from './AboutText';
import AboutGradient from './AboutGradient';
import AboutGroup from './AboutGroup';

class AboutPage extends Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <section>
        <AboutHeader />
          <BorderGradient />
        <AboutText/>
        {
          this.props.about &&
          this.props.about.destacado ?
            <AboutGradient text={this.props.about.destacado}/>
          : ''
        }
        <AboutGroup />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  about: state.about
})

export default connect(mapStateToProps, null)(AboutPage);
