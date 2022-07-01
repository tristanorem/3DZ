import React from 'react';
import Navbar from '../components/Navbar';
import Azul from '../components/Azul';
import Form from '../components/Form'
import Footer  from '../components/Footer';



const Contact = () => {
  return (
    < div>
    < Navbar/>
    < Azul  letters= "Contactanos en nuestras redes o WhatsApp "/>
    <Form/>
    < Footer/>
    </ div>
  )
}

export default Contact