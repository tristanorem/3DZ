import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox';
import videoImpresion from '../assets/videoparapaginaweb/boquilla.mp4'
import './Fabrica.css'
import Contenedor from './Contenedor';
import Pendrive from './Penusb';
import Regatones from './Regatones'



export default function Fabrica() {
  return (
    < div className='continer-1'>
      < div className='text-1'>
      <h2>Boquilla para Billeteros</h2>
      </ div>
      < SRLWrapper >
      < div className='boxContiner'>
        <p>Desarrollamos el modelado 3D y producción en cantidad de boquillas para billeteros, tanto para Bancos como Casinos.   </p>
        < video autoPlay loop muted id='video'>
                <source src={videoImpresion} type='video/mp4' />
            </ video>

          
         
      </ div>
      < div className='continerImag'>
          < img src={require( '../assets/boquillas/boquilla1.jpg')} />
          < img src={require( '../assets/boquillas/boquilla2.jpg')} />
          < img src={require( '../assets/boquillas/boquilla3.jpg')} />
          </ div>
      <Contenedor/>
      <Pendrive/>
      <Regatones/>
     </SRLWrapper>
    </ div>
    
    
  )
}
