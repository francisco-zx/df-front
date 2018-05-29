import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class AboutText extends Component {
  render() {
    return (
      <article className={css(style.aboutText)}>
        <div className={css(style.content) + ' container'}>
          <h2 className={css(style.title) + ' animated fadeIn'}>DF Entertainment</h2>
          <h4 className={css(style.subTitle) + ' animated fadeIn'}>Un compromiso con la diversión.</h4>
          <p className={css(style.text) + ' animated fadeIn'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ultrices, mollis enim a, elementum quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut lacus ut odio porta luctus. Praesent ut ante vel sapien fringilla consequat non non justo. Aliquam ac velit in nisl laoreet feugiat vitae et est. Quisque ut elit a mi luctus faucibus eget ut quam. Maecenas sed lacus dolor. Phasellus sollicitudin sem ut turpis volutpat euismod. Morbi sollicitudin felis in mauris pellentesque finibus. In bibendum felis bibendum iaculis accumsan. Orci varius natoque penatibus et magnis dis parturient montes.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ultrices, mollis enim a, elementum quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut lacus ut odio porta luctus. Praesent ut ante vel sapien fringilla consequat non non justo. Aliquam ac velit in nisl laoreet feugiat vitae et est. Quisque ut elit a mi luctus faucibus eget ut quam. Maecenas sed lacus dolor. Phasellus sollicitudin sem ut turpis volutpat euismod. Morbi sollicitudin felis in mauris pellentesque finibus. In bibendum felis bibendum iaculis accumsan. Orci varius natoque penatibus et magnis dis parturient montes.
          </p>
        </div>
      </article>
    );
  }
}
const style = StyleSheet.create({
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
    marginBottom: '1rem',
    animationDelay: '0.3s'
  },
  text: {
    maxWidth: '55%',
    margin: '0 auto',
    padding: '1rem',
    fontSize: '1.1rem',
    lineHeight: 1.4,
    animationDelay: '0.6s'
  }
})
