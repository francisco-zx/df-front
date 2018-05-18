import React, { Component } from 'react';

export default class AboutText extends Component {
  render() {
    return (
      <article style={style.aboutText}>
        <div className='container' style={style.content}>
          <h2 style={style.title}>Monsters of Rock</h2>
          <h4 style={style.subTitle}>24 de Nov. / Tecnopolis</h4>
          <p style={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ultrices, mollis enim a, elementum quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut lacus ut odio porta luctus. Praesent ut ante vel sapien fringilla consequat non non justo. Aliquam ac velit in nisl laoreet feugiat vitae et est. Quisque ut elit a mi luctus faucibus eget ut quam. Maecenas sed lacus dolor. Phasellus sollicitudin sem ut turpis volutpat euismod. Morbi sollicitudin felis in mauris pellentesque finibus. In bibendum felis bibendum iaculis accumsan. Orci varius natoque penatibus et magnis dis parturient montes.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ultrices, mollis enim a, elementum quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut lacus ut odio porta luctus. Praesent ut ante vel sapien fringilla consequat non non justo. Aliquam ac velit in nisl laoreet feugiat vitae et est. Quisque ut elit a mi luctus faucibus eget ut quam. Maecenas sed lacus dolor. Phasellus sollicitudin sem ut turpis volutpat euismod. Morbi sollicitudin felis in mauris pellentesque finibus. In bibendum felis bibendum iaculis accumsan. Orci varius natoque penatibus et magnis dis parturient montes.
          </p>
          <div style={style.viewMore}>
            <h4 style={style.viewMoreText}>VER MAS IMAGENES</h4>
            <i className='fa fa-angle-down fa-5x'></i>
          </div>
        </div>
      </article>
    );
  }
}
const style = {
  aboutText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  content: {


  },
  title: {
    color: '#161616',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  subTitle: {
    fontWeight: 500,
    fontSize: '1.6rem',
    marginBottom: '1rem'
  },
  text: {
    maxWidth: '55%',
    margin: '0 auto',
    padding: '1rem',
    fontSize: '1.1rem',
    lineHeight: 1.4
  },
  viewMore: {
    fontWeight: 'bold',
    marginTop: '3rem'
  }
}
