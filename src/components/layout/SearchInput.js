import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class SearchInput extends Component {

  render() {
    return (
      <input className={css(style.searchInput) + ' animated fadeIn'} type='textarea' placeholder='Buscá por artistas o venues'/>
    );
  }
}

const style = StyleSheet.create({
  searchInput: {
    display: 'flex',
    padding: '0.3rem 2rem',
    border: '1px solid black',
    borderRadius: '10px',
    justifyContent: 'flex-end',
    "@media(max-width:  1024px)": {
      display: 'none'
    }
  }
})
