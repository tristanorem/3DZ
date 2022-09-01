import React from 'react';
import Navbar from '../components/Navbar';
import AzulContac from '../components/AzulContac';
import Form from '../components/Form'
import Footer  from '../components/Footer';



const Contact = () => {
  return (
    <div>
      <Navbar/>
      <AzulContac heading= "Contactanos en nuestras redes o Email"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact