import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import TrabajoImage from '../components/TrabajoImage';
import PictureBox from '../components/Picturebox';

const Modelado  = () => {
  return (
    <div>
    <Navbar/>
    < TrabajoImage  heading='Modelados 3D e Impresiones' text='Nuestros trabajos realizados'/>
    <PictureBox/>
    <Footer/>
    </div>
  )
}

export default Modelado;