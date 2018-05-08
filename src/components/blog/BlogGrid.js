import React, { Component } from 'react';

import SectionTitle from '../layout/SectionTitle';

export default class BlogGrid extends Component {
  render() {
    return (
      <article className='container'>
        <SectionTitle text='Blog' />
      </article>
    );
  }
}
