import React, { Component } from 'react';
import './FabricaImage.css';

class FrabicaImage extends Component {
  render() {
    return (
      < div className="impresion-img">
          < div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
      </div>
    )
  }
}

export default FrabicaImage;