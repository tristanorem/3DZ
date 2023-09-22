import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import './Socials.css';

const Socials = () => {
  return (
    < div className='icon-social'>
        
            < div className='boton'>
            < a href="https://wa.me/541139050940?text=Hola%20necesito%20informacion" target="_blank">
               <h4> <FaWhatsapp size={55} style={{color:'#0ff51e',marginLeft:'0.01rem'}} /></h4>
              </a>
           </ div>

    </ div>
  )
}

export default Socials