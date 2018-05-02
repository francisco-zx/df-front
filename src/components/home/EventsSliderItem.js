import React, { Component } from 'react';

export default class EventsSliderItem extends Component {
  render() {
    return (
      <div style={style.eventSliderItem}>
        <h1 style={style.date}>{this.props.date}</h1>
        <h1 style={style.title}>{this.props.title}</h1>
        <p style={style.location}>{this.props.location}</p>
        <div style={style.buttonGroup}>
          <button style={style.button}>VER MAS +</button>
          <button style={style.button}>COMPRAR</button>
        </div>
      </div>
    );
  }
}

const style = {
  eventSliderItem: {
    padding: '1rem 2rem',
    borderRight: '2px solid #161616',
    display: 'inline-block',
    textAlign: 'center',
    maxWidth: '17rem',
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
  }
}
