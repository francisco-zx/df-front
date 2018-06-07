import React, { Component } from 'react';


export default class Overlay extends Component {
  render() {
    return (
      <div style={style.overlay}>
      </div>
    );
  }
}
const style = {
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: "100%",
    background: '-moz-linear-gradient(left, rgba(22,22,22,1) 0%, rgba(22,22,22,0.95) 1%, rgba(22,22,22,0) 30%, rgba(22,22,22,0) 70%, rgba(22,22,22,1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(22,22,22,1) 0%,rgba(22,22,22,0.95) 1%,rgba(22,22,22,0) 30%,rgba(22,22,22,0) 70%,rgba(22,22,22,1) 100%)',
    background: 'linear-gradient(to right, rgba(22,22,22,1) 0%,rgba(22,22,22,0.95) 1%,rgba(22,22,22,0) 30%,rgba(22,22,22,0) 70%,rgba(22,22,22,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#161616", endColorstr="#161616",GradientType=1 )',
    pointerEvents: 'none'
  }
}
