import React, { Component } from 'react';
import Logo from '../../logo.svg';
import { Link } from 'react-router-dom';

import Nav from './Nav';

export default class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      padding: '3rem 5rem'
    }
  }

  render() {
    return (
      <header style={style.header}>
        <Link to='/' style={style.logoWrapper}>
          <img src={Logo} style={style.logo} alt='Logo DF Entertainment'/>
        </Link>
        <Nav />
      </header>
    );
  }
}

const style = {
  header: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: '2rem 4rem',
    borderImageTop : 'linear-gradient(to right, rgba(252,182,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    borderImage: 'Top-webkit-linear-gradient(left, rgba(252,182,73,1) 0%,rgba(255,38,125,1) 50%,rgba(111,23,255,1) 100%)',
    boxShadow: '0px 3px 15px 0px rgba(0,0,0,0.2)'
  },
  logo: {
    height: '4rem',
    width: 'auto',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start'
  },
  gradient: {
    width:'100%',
    height: '5px',
    background: '#d6249f',
    background: 'linear-gradient(to right at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
    boxShadow: '0px 3px 10px rgba(0,0,0,.25)'
  }
}
