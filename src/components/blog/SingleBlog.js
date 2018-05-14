import React, { Component } from 'react';

import SingleBlogSlider from './SingleBlogSlider';
import SingleBlogContent from './SingleBlogContent';
import SingleBlogVideo from './SingleBlogVideo';

export default class SingleBlogPage extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section>
        <SingleBlogSlider />
        <SingleBlogContent />
        <SingleBlogVideo />
      </section>
    );
  }
}
