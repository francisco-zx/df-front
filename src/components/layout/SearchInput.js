import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchInput extends Component {

  render() {
    return (
      <input style={style.searchInput} type='textarea' placeholder='Buscá por artistas o venues'/>
    );
  }
}

const style = {
  searchInput: {
    display: 'flex',
    padding: '0.3rem 2rem',
    border: '1px solid black',
    borderRadius: '10px',
    justifyContent: 'flex-end'
  }
}
