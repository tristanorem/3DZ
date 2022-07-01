import React from 'react';
import {FaFacebook,FaInstagram,FaMailBulk,FaWhatsapp,FaTwitter} from 'react-icons/fa'
import './Form.css'


const Form = () => {
  return (
    < div className='form'>
       < div className='card-container'>
        < div className='card'>
          < h3>- Comunicate por -</ h3>
          < span className='bar'></ span>
          < p className='btc'>Facebook </ p>
          < p > - Pedinos tus diseños e impresiones - </ p>
          < p > - Consultarnos sin ningun problema - </ p>
          < a href="https://www.facebook.com/mariaelena.acevedo.98" >
           < FaFacebook  size={35} style={{color:'#fff',marginRight:'2rem'}} /> 
          </ a>
        </ div>
        < div className='card'>
          < h3>- Comunicate por -</ h3>
          < span className='bar'></ span> 
          < p className='btc'>Instagram</ p>
          < p > - Pedinos tus diseños e impresiones - </ p>
          < p > - Consultarnos sin ningun problema - </ p>
          < a href="https://www.instagram.com/3dzarteimpresiones/" >
           < FaInstagram   size={35} style={{color:'#fff',marginRight:'2rem'}} /> 
          </ a>
          
        </ div>
        < div className='card'>
          < h3>- Comunicate por -</ h3>
          < span className='bar'></ span>
          < p className='btc'>Email</ p>
          < p > - Pedinos tus diseños e impresiones - </ p>
          < p > - Consultarnos sin ningun problema - </ p>
          < a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" >
           < FaMailBulk  size={35} style={{color:'#fff',marginRight:'2rem'}} /> 
          </ a>
         
        </ div>
        < div className='card'>
          < h3>- Comunicate por -</ h3>
          < span className='bar'></ span>
          < p className='btc'>Whatsapp</ p>
          < p > - Pedinos tus diseños e impresiones - </ p>
          < p > - Consultarnos sin ningun problema - </ p>
          < a href="https://web.whatsapp.com/" >
           < FaWhatsapp  size={35} style={{color:'#fff',marginRight:'2rem'}} /> 
          </ a>
          
        </ div>
        < div className='card'>
          < h3>- Comunicate por -</ h3>
          < span className='bar'></ span>
          < p className='btc'>Twitter </ p>
          < p > - Pedinos tus diseños e impresiones - </ p>
          < p > - Consultarnos sin ningun problema - </ p>
          < a href="https://twitter.com/Elena25209283" >
           < FaTwitter  size={35} style={{color:'#fff',marginRight:'2rem'}} /> 
          </ a>
         
        </ div>
       </ div> 
    </ div>
  )
}

export default Form;