import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <section >
        Home
        <Link to='/events'>click</Link>
      </section>
    );
  }
}
