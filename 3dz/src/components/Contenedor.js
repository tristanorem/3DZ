import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox';
import videoImpresion from '../assets/videoparapaginaweb/estuche.mp4'
import './Contenerdor.css'


export default function Contenedor() {
  return (
    < div className='continer'>
      < div className='text'>
        <h2>Estuches Personalizados</h2>
      </ div>
      < SRLWrapper >
      < div className='box1'>
        <p>Estuches en forma de contenedor. Realizamos impresiones en grandes dimensiones obteniendo un resultado impactante en la visual del cliente.
                 </p>
        < video autoPlay loop muted id='video'>
                <source src={videoImpresion} type='video/mp4' />
            </ video>
          < div className='continerImage'>
            
         
            < img src={require( '../assets/boquillas/estuche1.jpg')} /> 
          

          
            < img src={require( '../assets/boquillas/estuche2.jpg')} /> 
         
          
            < img src={require( '../assets/boquillas/estuche3.jpg')} />
          

          </ div>
        
      </ div>
     </SRLWrapper>
    </ div>
    
    
  )
}
