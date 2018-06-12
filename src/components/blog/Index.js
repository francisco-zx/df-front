import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogSlider from './BlogSlider';
import BlogGrid from './BlogGrid';

class BlogPage extends Component {
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
        <BlogGrid/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  blog: state.blog
});
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)
