import React, { Component } from 'react';
import Logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import Nav from './Nav';
import MobileMenu from './MobileMenu';
import MobileSearch from './MobileSearch';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMobileMenu: false,
      showMobileSearch: false,
      headerStyle: false
    }
    window.addEventListener('scroll', this.fixHeader);
  }
  fixHeader = (event) => {
    window.scrollY > 50 ?
      this.setState({fixed: true})
    : this.setState({fixed: false})
  }
  toggleMobileMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    })
  }
  toggleMobileSearch = () => {
    this.setState({
      showMobileSearch: !this.state.showMobileSearch
    })
  }
  search = (search) => {
    const url = document.location.href.split('/')[3];
    url === 'search' ?
      this.props.history.replace(`/search/${search}`)
    : this.props.history.push(`/search/${search}`)
  }
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <header className={(this.state.fixed ? css(style.headerFixed) : css(style.header))}>
        <div className={css(style.mobileMenuIcon)+ ' clickable'} onClick={() => {this.toggleMobileMenu()}}>
          <i className='fa fa-bars fa-2x'></i>
        </div>
        <Link to='/' className={css(style.logoWrapper)}>
          <img src={Logo} className={css(style.logo) + ' animated fadeIn'} alt='Logo DF Entertainment'/>
        </Link>
        <Nav search={this.search} goBack={this.goBack}/>
        <div className={css(style.mobileSearchIcon)} onClick={() => {this.toggleMobileSearch()}}>
          <i className='fa fa-search fa-2x'></i>
        </div>
        {
          this.state.showMobileMenu &&
            <MobileMenu closeMenu={this.toggleMobileMenu}/>
        }
        {
          this.state.showMobileSearch &&
            <MobileSearch closeSearch={this.toggleMobileSearch} goBack={this.goBack} search={this.search} topBar={this.props.topBar}/>
        }
      </header>
    );
  }
}

const style = StyleSheet.create({
  header: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: '2rem 6rem',
    transition: 'all 0.6s ease',
    boxShadow: '0px 3px 15px 0px rgba(0,0,0,0.2)',
    "@media(max-width: 996px)": {
      justifyContent: 'center',
    },
    "@media(max-width: 480px)": {
      padding: '2rem',
    },
  },
  headerFixed: {
    display: 'flex',
    flex: 1,
    position: 'fixed',
    background: 'white',
    top: 0,
    left: 0,
    zIndex: 9999,
    padding: '0.6rem',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.6s ease',
    boxShadow: '0px 3px 15px 0px rgba(0,0,0,0.2)',
    "@media(max-width: 996px)": {
      justifyContent: 'center',
    },
    "@media(max-width: 480px)": {
      padding: '1rem',
    },
  },
  logo: {
    height: '4rem',
    width: 'auto',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    "@media(max-width: 996px)": {
      flex: 2,
    },
    "@media(max-width: 480px)": {
      height: '3rem',
    },
  },
  gradient: {
    width:'100%',
    height: '5px',
    background: '#d6249f',
    background: 'linear-gradient(to right at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
    boxShadow: '0px 3px 10px rgba(0,0,0,.25)'
  },
  mobileMenuIcon: {
    display: 'flex',
    flex: 1,
    "@media(min-width: 996px)": {
      display: 'none'
    }
  },
  mobileSearchIcon: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    "@media(min-width: 996px)": {
      display: 'none'
    }
  },
  mobileSearchIconIcon: {
    display: 'flex'
  }
})
