import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogSlider from './BlogSlider';
import BlogGrid from './BlogGrid';

class BlogPage extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div>
        <BlogSlider />
        <BlogGrid history={this.props.history}/>
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
