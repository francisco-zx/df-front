import React, { Component } from 'react';
import HomeSliderPic from '../../assets/home/home_slider.jpg';

import Overlay from '../layout/Overlay';

export default class ContactPage extends Component {
  render() {
    return (
      <section style={style.contactPage}>
        Contact
        <Overlay />
      </section>
    );
  }
}
const style = {
  contactPage: {
    height: "81vh",
    background: `url(${HomeSliderPic})`,
    backgroundSize: 'cover',
    position: 'relative'
  }
}
