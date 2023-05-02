import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox';
import videoImpresion from '../assets/videoparapaginaweb/regaton.mp4'
import './Regatones.css'


export default function Contenedor() {
  return (
    < div className='continer'>
      < div className='text'>
        <h2>Regatones a medida</h2>
      </ div>
      < SRLWrapper >
      < div className='box1'>
        <p>Regatones para perfiles de aluminio, adaptables en ambientes interiores y exteriores, resistentes al peso y encastrables al objeto solicitado.
            Siempre pedimos una muestra del perfil para realizar correctamente el diseño y luego la impresión.
                 </p>
        < video autoPlay loop muted id='video'>
                <source src={videoImpresion} type='video/mp4' />
            </ video>
          < div className='continerImage'>
            < img src={require( '../assets/boquillas/regaton1.jpg')} /> 
            < img src={require( '../assets/boquillas/regaton2.jpg')} /> 
            < img src={require( '../assets/boquillas/regaton3.jpg')} />
          </ div>
        
      </ div>
     </SRLWrapper>
    </ div>
    
    
  )
}
