import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {FaBars ,FaTimes} from 'react-icons/fa';
import image from '../assets/image/logo3dz2.png';
import './Navbar.css';

const Navbar = () => {
  const[click ,setClick]=useState(false);
  const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <Link to='/'><img className="logo" src={image} alt="3DZ"/></Link>
      <ul className={click ? 'nav-menu active': 'nav-menu'}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/NuestrosTrabajos'>Nuestros Trabajos</Link>
        
      </li>
      <li>
        <Link to='/Contacto'>Contactanos</Link>
        
      </li>
      <li>
        <Link to='/Nosotros'>Nosotros</Link>
        
      </li>
        </ul>  
        <div className='hamburger' onClick={handleClick}>
          {click ?(<FaTimes  size={20} style={{color:'#fff'}}/>) : ( <FaBars  size={25} style={{color:' #fff  '}} />)}
         
        </div>
    </div>
  )
}

export default Navbar