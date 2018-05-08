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
    background: 'rgba(0,0,0,0.4)',
    zIndex: 2
  }
}
