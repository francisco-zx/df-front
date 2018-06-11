import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Layout
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TopBar from '../components/layout/TopBar';

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

class AppRouter extends Component {

  constructor(props){
    super(props);
    this.state = {
      events: {},
      blog: {}
    }
  }

  componentDidMount(){
    this.initializeEvents();
    this.initializeBlog();
  }

  initializeEvents = () => {
    fetch('https://dfapi.dlmr.co/api/eventos/all')
    .then(response => response.json())
    .then()
    .then(data => {
      console.log(data);
      this.setState({
        events: data
      }, () => {
        console.log(this.state.events)
      })
    })
  }

  initializeBlog = () => {
    fetch('https://dfapi.dlmr.co/api/blog/all')
    .then(response => response.json())
    .then()
    .then(data => {
      console.log(data);
      this.setState({
        blog: data
      }, () => {
        console.log(this.state.blog)
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <TopBar />
          <Route component={Header}/>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/events" exact component={EventsPage} />
                <Route path="/events/harry-styles" component={SingleEvent} />
              <Route path="/venues" exact component={VenuesPage} />
                <Route path="/venue/teatro-vorterix" component={SingleVenue} />
              <Route path="/timeline" exact component={TimelinePage} />
                <Route path="/timeline/monsters-of-rock" component={SingleTimelinePage} />
              <Route path="/blog" exact render={()=><BlogPage blog={this.state.blog}/>}/>
                <Route path="/blog/baf-week" component={SingleBlog} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/search/:search" component={SearchPage}/>
            </Switch>
          <Footer />
          <ToastContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
