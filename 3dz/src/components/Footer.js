import React from 'react'
import './Footer.css'
import {FaFacebook,FaInstagram,FaMailBulk,FaWhatsapp,FaTwitter,FaSearchLocation} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container" >
          <div className="left">
            <div className="location">
              < a href="https://www.google.com/maps/place/Av.+Carlos+Pellegrini+3880,+Quilmes+Oeste,+Provincia+de+Buenos+Aires/@-34.7428774,-58.2996022,3a,75y,240.33h,90t/data=!3m6!1e1!3m4!1sCl0k9mdtSv3jsd1xBRJp5Q!2e0!7i13312!8i6656!4m5!3m4!1s0x95a32dc6214a4af7:0x6fe667a2f338c6a6!8m2!3d-34.7430646!4d-58.2995252">
              <FaSearchLocation size={20} style={{color:'#fff',marginRight:'2rem'}} />
              </a>
               <div>
                 <p> Pellegrini </p>
                 <h4> Bs As, Quilmes</h4>
                </div>
            </div>
            < div className="phone">
              < a href="https://web.whatsapp.com/">
               <h4>< FaWhatsapp size={29} style={{color:'#fff',marginRight:'2rem'}} />1173647000</h4>
              </a>s

            </div>
            < div className="email">
              < a href="https://mail.google.com/">
                <h4><FaMailBulk size={26} style={{color:'#fff',marginRight:'2rem'}} />3dzarteimpresiones@gmail.com</h4>
              </ a>
            </div>
          </div>

         < div className="rigth">
             <h4>Sobre Nosotros</h4>
            <p>
              Nos dedicamos al diseño, modelado e impresión 3D para todo tipo de proyectos,
               tanto industrial como particular. Realizamos modelados oragánicos y no orgánicos y  su 
               impresión en la medida correspondiente. Los materiales que trabajamos son PLA, FLEX, NYLON 12, HIPS, PET-G, entre otros.
               
            </p>
          < div className="social">

          < a href="https://www.facebook.com/mariaelena.acevedo.98" >
           < FaFacebook  size={30} style={{color:'#fff',marginRight:'2rem'}} /> 
          </ a>
             < a href="https://www.instagram.com/3dzarteimpresiones/" >
           < FaInstagram   size={30} style={{color:'#fff',marginRight:'2rem'}} /> 
          </ a>
            < a  href="https://twitter.com/Elena25209283">
              <FaTwitter size={30} style={{color:'#fff',marginRight:'1rem'}} />
            </a>

          </div>

         </div> 
      </div>

    </div>
  )
}

export default Footer