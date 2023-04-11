import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox';
import videoImpresion from '../assets/videoparapaginaweb/boquillavideo.mp4'
import './Fabrica.css'


export default function Fabrica() {
  return (
    < div className='continer-1'>
       
               
      < div className='text-1'>
          <h1> Trabajos en Produccion</h1>
      </ div>

      < SRLWrapper >
      < div className='boxContiner'>
        <p>Realizamos el modelado y la Produccion en cantidad de  Boquillas ivizion, para billeteros ,tanto para Bancos o Casinos   </p>
          < div className='continerImag'>
          < img src={require( '../assets/boquillas/boquilla001.jpg')} />
          </ div>
          < video autoPlay loop muted id='video'>
                <source src={videoImpresion} type='video/mp4' />
            </ video>
      </ div>
     </SRLWrapper>

    
    </ div>
    
  )
}
