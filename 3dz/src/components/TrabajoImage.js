import React, { Component } from 'react';
import './TrabajoImage.css';

class TrabajoImage extends Component {
  render() {
    return (
      <div className="model-img">
          <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
      </div>
    )
  }
}

export default TrabajoImage