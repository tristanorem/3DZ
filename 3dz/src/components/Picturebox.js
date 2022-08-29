import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox';

import './Picturebox.css';


const Picturebox = () => {
   return( 
      < div className='box'>
         < div className='title'>
            <h1 className='texto'> Nuestros Trabajos</h1>
         </ div>
         < SRLWrapper >
         < div className="container"> 
           
             < div className='box-img'>
               < img src={require( '../assets/image/images1.png')} />
             </ div>
             < div className='box-img' >
               < img src={require( '../assets/image/images2.png')} />
             </ div>
             < div  className='box-img'>
               < img src={require( '../assets/image/images3.png')} />
             </ div>
             < div className='box-img' >
               < img src={require( '../assets/image/images4.png')} />
             </ div>
             < div className='box-img' >
               < img src={require( '../assets/image/images5.png')} />
             </ div>
             < div  className='box-img'>
               < img src={require( '../assets/image/images6.png')} />
             </ div>
             < div className='box-img' >
               < img src={require( '../assets/image/images7.png')} />
             </ div>
             < div className='box-img' >
               < img src={require( '../assets/image/images8.png')} />
             </ div>
             < div className='box-img' >
               < img src={require( '../assets/image/images9.png')} />
             </ div>
             < div className='box-img' >
               < img src={require( '../assets/image/images10.png')} />
             </ div>
             
             < div className='box-img'>
               < img src={require( '../assets/image/images11.png')} />
             </ div>
             < div className='box-img'>
               < img src={require( '../assets/image/images12.png')} />
             </ div>
             < div className='box-img'>
               < img src={require( '../assets/image/images13.png')} />
             </ div>
             < div className='box-img'>
               < img src={require( '../assets/image/images14.png')} />
             </ div>
             < div className='box-img'>
               < img src={require( '../assets/image/images15.png')} />
             </ div>
             < div className='box-img'>
               < img src={require( '../assets/image/images16.png')} />
             </ div>
             < div className='box-img'>
               < img src={require( '../assets/image/images17.png')} />
             </ div>
             < div className='box-img'>
               < img src={require( '../assets/image/images18.png')} />
             </ div>
          </ div>
          
       </SRLWrapper>

     </div>
   )
}

export default Picturebox;