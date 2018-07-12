import React from 'react';

import BorderGradient from '../layout/BorderGradient'

import Flyer from '../../assets/blog/flyer_bafweek.jpg';
import Back from '../../assets/blog/back_bafweek.jpg';

export default class SingleBlogDetail extends React.Component{
  render(){
    return(
      <article>
        <div style={{padding: '0.5rem', marginBottom: '2rem'}}>
          <img style={style.itemImg} src={this.props.selectedBlog.img_flyer} />
          <div style={style.eventTitle}>Flyer</div>
          <BorderGradient height='6px'/>
        </div>
        <div style={{padding: '0.5rem', marginBottom: '2rem'}}>
          <img style={style.itemImg} src={this.props.selectedBlog.img_secundaria} />
          <div style={style.eventTitle}>Backstage: Pelo y Makeup</div>
          <BorderGradient height='6px'/>
        </div>
      </article>

    )
  }
}
const style = {
  blogDetails: {
    background: '#161616',
    verticalAlign:'top'
  },
  eventDetails: {
    padding: '2rem'
  },
  eventDetailTitle: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 1.5,
    fontSize: '1.5rem'
  },
  eventSliderItem: {
    display: 'inline-block',
    textAlign: 'center',
    whiteSpace: 'normal'
  },
  date: {
    fontSize: '1.5rem',
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  },
  location: {
    marginBottom: '2rem'
  },
  button: {
    color: 'white',
    fontSize: '0.7rem',
    border: '1px solid #161616',
    fontWeight: 'bold',
    background: '#161616',
    padding: '0.3rem 0.6rem',
    borderRadius: '10px',
    marginRight: '1rem',
    marginTop: '1rem'
  },
  itemImg: {
    width: '100%',
    height: 'auto'
  },
  eventTitle:{
    background: '#e9e9eb',
    textAlign: 'left',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#161616',
    padding: '1rem'
  },
}
