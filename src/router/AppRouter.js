import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//Layout
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import HomePage from '../components/home/Home';
import EventsPage from '../components/events/Index';
import VenuesPage from '../components/venues/Index';
import TimelinePage from '../components/timeline/Index';
import BlogPage from '../components/blog/Index';
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
              <Route path="/events" component={EventsPage} />
              <Route path="/venues" component={VenuesPage} />
              <Route path="/timeline" component={TimelinePage} />
              <Route path="/blog" component={BlogPage} />
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
