import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {FaBars ,FaTimes} from 'react-icons/fa';
import image from '../assets/image/logo3dz.png';
import './Navbar.css';

const Navbar = () => {
  const[click ,setClick]=useState(false);
  const handleClick = () => setClick(!click)

  //color del navbar
  const[color,setColor]=useState(false)
    const changeColor =() =>{
      if(window.scrollY >=100){
        setColor(true)
      }else{
        setColor(false)
      }
    }
    window.addEventListener('scroll',changeColor)
  return (
    < div className={color ? 'header header-bg': 'header'}>
      < Link to='/'>< img className={color ? 'logo logo-bg': 'logo'} src={image} alt="3DZ"/></Link>
      < ul className={click ? 'nav-menu active': 'nav-menu'}>
      <li>
        < Link to='/'>Home</Link>
      </li>
      <li>
        < Link to='/Modelado'>Personajes </Link>
        
      </li>
      <li>
        < Link to='/Contact'>Contactanos</Link>
        
      </li>
      <li>
        < Link to='/Fabrica'>Trabajo Industrial </Link>
        
      </li>
      
        </ul>  
        <div className='hamburger' onClick={handleClick}>
          {click ?(<FaTimes  size={20} style={{color:'#fff'}}/>) : ( <FaBars  size={25} style={{color:' #fff  '}} />)}
         
        </div>
    </div>
  )
}

export default Navbar