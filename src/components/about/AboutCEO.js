import React, { Component } from 'react';

import CEOImg from '../../assets/about/CEOImg.png';

export default class AboutText extends Component {
  render() {
    return (
      <article style={style.aboutCEO}>
        <div className='container' style={style.content}>
          <div style={style.left}>
            <img src={CEOImg} width='60%'/>
          </div>
          <div style={style.right}>
            <div style={style.rightContent}>
              <h2 style={style.title}>Diego Finkelstein</h2>
              <h4 style={style.subTitle}>Fundador & CEO</h4>
              <h4 style={style.subTitle}>-</h4>
              <p style={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ultrices, mollis enim a, elementum quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut lacus ut odio porta luctus. Praesent ut ante vel sapien fringilla consequat non non justo. Aliquam ac velit in nisl laoreet feugiat vitae et est. Quisque ut elit a mi luctus faucibus eget ut quam.
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
const style = {
  aboutCEO: {
    background: '#e9e9eb'
  },
  content: {
    display: 'flex',
    flex: 1
  },
  left: {
    display: 'flex',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    display: 'flex',
    flex: 4,
    alignItems: 'center',
  },
  title: {
    display: 'flex',
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
    fontSize: '1.1rem',
    lineHeight: 1.4
  }
}
