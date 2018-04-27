import React, { Component } from 'react';
import ReactDOM from "react-dom";

import AppRouter from "./router/AppRouter.js";


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
