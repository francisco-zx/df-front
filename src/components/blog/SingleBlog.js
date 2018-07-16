import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleBlogSlider from './SingleBlogSlider';
import SingleBlogContent from './SingleBlogContent';
import SingleBlogVideo from './SingleBlogVideo';

import { fetchSelectedBlog } from '../../Actions/Blog_Action';

class SingleBlogPage extends Component {
  componentWillMount(){
    const slug = this.props.match.params.slug
    !this.props.selectedBlog.length ?
      this.props.fetchSelectedBlog(slug)
    : console.log(this.props.selectedBlog)
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section>
        <SingleBlogSlider selectedBlog={this.props.selectedBlog}/>
        <SingleBlogContent selectedBlog={this.props.selectedBlog}/>
        {
          this.props.selectedBlog &&
            this.props.selectedBlog.video &&
              <SingleBlogVideo />
        }
      </section>
    );
  }
}
const mapStateToProps = state =>({
 selectedBlog: state.selectedBlog
})
const mapDispatchToProps = dispatch => ({
  fetchSelectedBlog: (slug) => dispatch(fetchSelectedBlog(slug))
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleBlogPage);
