import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Layout
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TopBar from '../components/layout/TopBar';
//Index Components
import HomePage from '../components/home/Home';
import EventsPage from '../components/events/Index';
  import SingleEvent from '../components/events/SingleEvent';
import VenuesPage from '../components/venues/Index';
  import SingleVenue from '../components/venues/SingleVenue';
import TimelinePage from '../components/timeline/Index';
  import SingleTimelinePage from '../components/timeline/SingleTimeline';
import BlogPage from '../components/blog/Index';
  import SingleBlog from '../components/blog/SingleBlog';
import AboutPage from '../components/about/Index';
import ContactPage from '../components/contact/Index';
import SearchPage from '../components/search/Index';
//Actions
import { fetchBlog } from '../Actions/Blog_Action';
import { fetchEvents } from '../Actions/Events_Action';
import { fetchVenues } from '../Actions/Venues_Action';
import { fetchTopBar } from '../Actions/TopBar_Action';
import { fetchAbout } from '../Actions/About_Action';
import { fetchTimeline } from '../Actions/Timeline_Action';

class AppRouter extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: null
    }
  }

  componentWillMount(){
    this.props.fetchBlog()
    this.props.fetchEvents()
    this.props.fetchVenues()
    this.props.fetchTopBar()
    this.props.fetchAbout()
    this.props.fetchTimeline()
  }

  componentDidMount(){
    const path = document.location.href.split('/')[3];
    //console.log(path);
    this.setState({
      url: path
    }, () => {
      //console.log(this.state.url)
    })
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <TopBar/>
          <Route component={Header} />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/events" exact component={EventsPage} />
                <Route path="/event/:slug" component={SingleEvent} />
              <Route path="/venues" exact component={VenuesPage} />
                <Route path="/venue/:slug" component={SingleVenue} />
              <Route path="/timeline" exact component={TimelinePage} />
                <Route path="/timeline/:slug" component={SingleTimelinePage} />
              <Route path="/news" exact component={BlogPage}/>
                <Route path="/news/:slug" component={SingleBlog} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/search/:search" component={SearchPage}/>
            </Switch>
            <Footer/>
          <ToastContainer />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state =>({
  about: state.about,
  blog: state.blog,
  events: state.events,
  venues: state.venues,
  topBar: state.topBar,
  selectedBlog: state.selectedBlog,
  selectedVenue: state.selectedVenue,
  selectedEvent: state.selectedEvent,
  search: state.search,
  timeline: state.timeline,
  selectedTimeline: state.selectedTimeline
})
const mapDispatchToProps = dispatch => ({
  fetchBlog: () => dispatch(fetchBlog()),
  fetchEvents: () => dispatch(fetchEvents()),
  fetchVenues: () => dispatch(fetchVenues()),
  fetchTopBar: () => dispatch(fetchTopBar()),
  fetchAbout: () => dispatch(fetchAbout()),
  fetchTimeline: () => dispatch(fetchTimeline())
});
export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
