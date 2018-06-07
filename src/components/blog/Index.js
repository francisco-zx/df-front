import React, { Component } from 'react';

import BlogSlider from './BlogSlider';
import BlogGrid from './BlogGrid';

export default class BlogPage extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props.blog)
  }
  render() {
    return (
      <div>
        <BlogSlider />
        <BlogGrid blog={this.props.blog}/>
      </div>
    );
  }
}
