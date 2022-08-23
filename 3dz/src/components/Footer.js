import React from 'react'
import './Footer.css'
import {FaFacebook,FaInstagram,FaMailBulk,FaPhone,FaSearchLocation,FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  return (
    < div className="footer">
      < div className="footer-container" >
          < div className="left">
            < div className="location">
              < a href="https://www.google.com/maps/place/Av.+Carlos+Pellegrini+3880,+Quilmes+Oeste,+Provincia+de+Buenos+Aires/@-34.7428774,-58.2996022,3a,75y,240.33h,90t/data=!3m6!1e1!3m4!1sCl0k9mdtSv3jsd1xBRJp5Q!2e0!7i13312!8i6656!4m5!3m4!1s0x95a32dc6214a4af7:0x6fe667a2f338c6a6!8m2!3d-34.7430646!4d-58.2995252">
                 <FaSearchLocation size={30} style={{color:'#FFF',marginRight:'3rem'}} />
              </ a>
               <div>
                 <p> Quilmes </p>
                 <h4> Buenos Aires</h4>
                </div>
            </div>
            < div className="phone">
              
               <h4>< FaPhone size={35} style={{color:'#52FA5C',marginRight:'3rem'}} />1130116275</h4>
              

            </div>
            < div className="email">
              
                < h4><FaMailBulk size={35} style={{color:'#FA1714',marginRight:'3rem'}} />3dzarteimpresiones@gmail.com</h4>
              
            </div>
          </div>

         < div className="rigth">
             < h4 className='titulo'>Sobre Nosotros</h4>
            <p>
              Nos dedicamos al diseño, modelado e impresión 3D para todo tipo de proyectos,
               tanto industrial como particular. Realizamos modelados orgánicos y no orgánicos y  su 
               impresión en la medida correspondiente. Los materiales que trabajamos son PLA, FLEX, NYLON 12, HIPS, PET-G, entre otros.
               
            </p>
          < div className="social">

          < a href="https://www.facebook.com/3DZ-Impresiones-3D-105328892304523" >
           < FaFacebook  size={33} style={{color:'#0000ff', marginRight:'4rem'}} /> 
          </ a>
             < a href="https://www.instagram.com/3dzarteimpresiones/" >
           < FaInstagram   size={33} style={{color:'#d6249f', marginRight:'4rem'}} /> 
          </ a>
           
          </div>

         </div> 
      </div>

    </div>
  )
}

export default Footer