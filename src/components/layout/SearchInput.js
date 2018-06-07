import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SearchIcon from '../../assets/home/search.svg';

export default class SearchInput extends Component {

  render() {
    return (
      <div style={{position: 'relative'}}>
        <input className={css(style.searchInput) + ' animated fadeIn'} type='textarea' placeholder='Buscá por artistas o venues...'/>
        <img src={SearchIcon} className={css(style.searchIcon)} width='18srem'/>
      </div>
    );
  }
}

const style = StyleSheet.create({
  searchInput: {
    display: 'flex',
    position: 'relative',
    padding: '8px',
    width: '13rem',
    border: '1px solid #161616',
    borderRadius: '20px',
    justifyContent: 'flex-end',
    "@media(max-width:  1024px)": {
      display: 'none'
    }
  },
  searchIcon: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    paddingRight: '8px'
  }
})
