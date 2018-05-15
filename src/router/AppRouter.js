import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//Layout
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import HomePage from '../components/home/Home';
import EventsPage from '../components/events/Index';
  import SingleEvent from '../components/events/SingleEvent';
import VenuesPage from '../components/venues/Index';
  import SingleVenue from '../components/venues/SingleVenue';
import TimelinePage from '../components/timeline/Index';
import BlogPage from '../components/blog/Index';
  import SingleBlog from '../components/blog/SingleBlog';
import AboutPage from '../components/about/Index';
import ContactPage from '../components/contact/Index';


class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/events" exact component={EventsPage} />
                <Route path="/events/harry-styles" component={SingleEvent} />
              <Route path="/venues" exact component={VenuesPage} />
                <Route path="/venue/teatro-vorterix" component={SingleVenue} />
              <Route path="/timeline" component={TimelinePage} />
              <Route path="/blog" exact component={BlogPage} />
                <Route path="/blog/baf-week" component={SingleBlog} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
