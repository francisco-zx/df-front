import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleEventSlider from './SingleEventSlider';
import SingleEventInfo from './SingleEventInfo';
//import RelatedEventsSlider from './RelatedEventsSlider';

import { fetchSelectedEvent } from '../../Actions/Events_Action';

class SingleEventPage extends Component {

  componentWillMount(){
    const slug = this.props.match.params.slug

      this.props.fetchSelectedEvent(slug)
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <SingleEventSlider selectedEvent={this.props.selectedEvent}/>
        <SingleEventInfo selectedEvent={this.props.selectedEvent}/>
        {/*
          window.innerWidth > 480 &&
          <RelatedEventsSlider />
          */
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedEvent: state.selectedEvent
})

const mapDispatchToProps = dispatch => ({
  fetchSelectedEvent: slug => dispatch(fetchSelectedEvent(slug))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleEventPage)
