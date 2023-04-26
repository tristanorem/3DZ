import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox';
import videoImpresion from '../assets/videoparapaginaweb/pendrive.mp4'
import './Pendriver.css'


export default function Penusb() {
  return (
    < div className='continer-2'>
      < div className='text-2'>
        <h2>Porta Pendrive</h2>
      </ div>
      < SRLWrapper >
      < div className='Continerbox'>
        <p>Elaboramos la producción en serie de la cantidad que necesites, sin perder la calidad que se busca en la terminación de la impresión. 
                 </p>
        < video autoPlay loop muted id='video'>
                <source src={videoImpresion} type='video/mp4' />
            </ video>
          < div className='ContinerImag'>
          < img src={require( '../assets/boquillas/pendrive1.jpg')} />
          < img src={require( '../assets/boquillas/pendrive2.jpg')} />
          < img src={require( '../assets/boquillas/pendrive3.jpg')} />
          </ div>
        
      </ div>
     </SRLWrapper>
    </ div>
    
    
  )
}
