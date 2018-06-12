import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./Store/configureStore";
import AppRouter from "./router/AppRouter.js";

import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
