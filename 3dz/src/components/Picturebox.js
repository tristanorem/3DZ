import React from 'react'
import './Picturebox.css'


import torre from '../assets/image/images1.jpg'
import chimuelo from '../assets/image/images2.jpg'
import perro from '../assets/image/images3.jpg'
import goku from '../assets/image/images4.jpg'
import kaka from '../assets/image/images5.jpg'
import llave from '../assets/image/images6.jpg'
import orna from '../assets/image/images7.jpg'
import ray from '../assets/image/images8.jpg'
import sello from '../assets/image/images9.jpg'
import nave from '../assets/image/images10.jpg'



const Picturebox = () => {
  return (
    < div className='box'>
      
         < div className='title '>
          <h1 className='texto'>Nuestros trabajos</h1>
         </ div>
         < div className='galery-container'>
            < div className='box-img'>
              
               < img src={torre} alt="im" className='galery-item' />
            </ div> 
            < div className='box-img'>
               < img src={chimuelo} alt="im"   className='galery-item'/>
            </ div>
            < div className='box-img'>
               < img src={perro} alt="im"  className='galery-item' />
            </ div>
            < div className='box-img'>
               < img src={goku} alt="im"  className='galery-item' />
            </ div>
            < div className='box-img'>
               < img src={kaka} alt="im"  className='galery-item' />
            </ div>
            < div className='box-img'>
               < img src={llave} alt="im"   className='galery-item'/>
            </ div>
            < div className='box-img'>
               < img src={orna} alt="im"   className='galery-item'/>
            </ div>
            < div className='box-img'>
               < img src={ray} alt="im"   className='galery-item'/>
            </ div>
            < div className='box-img'>
               < img src={sello} alt="img"  className='galery-item' />
            </ div>
            < div className='box-img'>
               < img src={nave} alt="im"   className='galery-item'/>
            </ div>
         </ div>
        
          
       </ div>



  )
}

export default Picturebox