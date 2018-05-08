import React, { Component } from 'react';

import BlogSlider from './BlogSlider';
import BlogGrid from './BlogGrid';

export default class BlogPage extends Component {
  render() {
    return (
      <div>
        <BlogSlider />
        <BlogGrid/>        
      </div>
    );
  }
}
