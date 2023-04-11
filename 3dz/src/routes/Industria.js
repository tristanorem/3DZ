import React from 'react'
import Navbar from '../components/Navbar';
import FabricaImage from '../components/FabricaImage'
import Fabrica from '../components/Fabrica';
import Footer from '../components/Footer'; 


const Industria = () => {
  return (
    <div>
    <Navbar/>
    < FabricaImage  heading='Modelados 3D e Impresiones' text='Trabajamos en Produccion en Cantidad' />
    < Fabrica />
    <Footer/>
    </div>
  )
}

export default Industria ;