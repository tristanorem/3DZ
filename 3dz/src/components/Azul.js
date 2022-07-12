import React, { Component } from 'react';
import './Azul.css';

class Azul extends Component {
  render() {
    return (
      < div className="azul-img">
          < div className="heading">
          <h1>{this.props.heading}</h1>
          
          </ div>
      </ div>
    )
  }
}

export default Azul