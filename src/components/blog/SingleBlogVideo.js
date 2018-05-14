import React, { Component } from 'react';

import SectionTitle from '../layout/SectionTitle';

export default class SingleBlogVideo extends Component{
  render(){
    return(
      <section alt='blog-video' className='container' style={{paddingTop: 0}}>
        <SectionTitle text='video' />
        <iframe width="100%" height='600px' src="https://www.youtube.com/embed/P8p24T93IIk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </section>
    )
  }
}
