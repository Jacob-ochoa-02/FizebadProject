import React, { useState, useEffect } from 'react';
import logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom";
import './headerBar.css'

export default function HeaderBar() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY > 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setFixed);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  });
  
  const scrollingTo = (id) =>{
    const elements = document.getElementById(id);
    if(elements) {
      elements.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={fix ? 'headerBarContainer solid':'headerBarContainer'}>
      <header className='Header-of'>
        <img className="headerLogo" src={logo} alt="Company Logo" />
        <nav>
          <ul>
            <li><p onClick={()=> {
              scrollingTo('index')
            }}>INICIO</p></li>
            <li><p onClick={()=> {
              scrollingTo('services')
            }}>SERVICIOS</p></li>
            <li><p onClick={()=> {
              scrollingTo('location')
            }}>UBICACIÓN</p></li>
            <li><Link to="/signUp">RESERVA</Link></li>
          </ul>
          <span className="logIn_btn">
            <Link to='/signUp'>INICIAR SESIÓN</Link>
          </span>
        </nav>
      </header>
    </div>
  );
}

