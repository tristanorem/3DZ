import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';

import impresionVideo from '../assets/videoparapaginaweb/videowebMP4.mp4'


const video = () => {
  return (
    <div className='print3d'>

        <video autoPlay loop muted id='video'>
            <source src={impresionVideo} type='video/mp4'/>
        </video>
        <div className='content'>
            <h1>3DZ</h1>
            <p>Servicio de impresión y Diseño 3D </p>    
        
             <div>
                <Link to='/modelados' className='btn'>Solicitá tu Modelado e Impresión</Link>
               
            </div>
        </div>
    </div>
  )
}

export default video;