import React from 'react'
import './Footer.css'
import {FaFacebook,FaInstagram,FaMailBulk,FaPhone,FaTwitter,FaSearchLocation} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container '>
          <div className='left'>
            <div className='location'>
              <FaSearchLocation size={20} style={{color:'#fff',marginRight:'2rem'}} />
               <div>
                 <p> 3880 Pellegrini </p>
                 <h4> Bs As, Quilmes</h4>
                </div>
            </div>
            <div className='whatsapp'>
              <h4><FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}} />1173647039</h4>
            </div>
            <div className='email'>
              <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}} />3dzarteimpresi9ones@gmail.com</h4>
            </div>
          </div>

         <div className='rigth'>
             <h4>Sobre Nosotros</h4>
            <p>
              Somos una empresa dedicada a el diseño/modelado e impresines 3D ,para todo tipo de proyectos.
               Tanto industrial como particular , nos especializamos en los modelados oraganicos y no organicos;
               imprimimos en taños de 20
            </p>
          <div className='social'>
            <FaFacebook size={30} style={{color:'#fff',marginRight:'1rem'}} />
            <FaInstagram size={30} style={{color:'#fff',marginRight:'1rem'}} />
            <FaTwitter size={30} style={{color:'#fff',marginRight:'1rem'}} />
          </div>

         </div> 
      </div>

    </div>
  )
}

export default Footer