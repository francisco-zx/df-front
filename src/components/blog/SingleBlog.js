import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleBlogSlider from './SingleBlogSlider';
import SingleBlogContent from './SingleBlogContent';
import SingleBlogVideo from './SingleBlogVideo';

class SingleBlogPage extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section>
        <SingleBlogSlider selectedBlog={this.props.selectedBlog}/>
        <SingleBlogContent selectedBlog={this.props.selectedBlog}/>
        <SingleBlogVideo />
      </section>
    );
  }
}
const mapStateToProps = state =>({
 selectedBlog: state.selectedBlog
})
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleBlogPage);
