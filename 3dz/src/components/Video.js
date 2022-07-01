import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';
import videoImpresion from '../assets/videoparapaginaweb/videowebMP4.mp4'


const video = () => {
  return (
    <div className="print3d">
           < video autoPlay loop muted id='video'>
                <source src={videoImpresion} type='video/mp4' />
            </ video>
        
        < div className="content">
            <h1>3DZ</h1>
            <p>Servicio de  Diseño 3D </p>    
        
             <div>
                < Link to='/Contact' className='btn'>Solicitá tu Modelado </Link>
               
            </div>
        </div>
    </div>
  )
}

export default video;