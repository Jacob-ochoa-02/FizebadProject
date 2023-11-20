import React, { useState, useEffect } from 'react';
import logo from "../../../assets/images/logo.png"
import LocationBar from '../locationBar/locationBar';
import DescriptionBar from '../descriptionBar/descriptionBar';
import { Link } from "react-router-dom";
import './headerBar.css';

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


  return (
    <div className={fix ? 'headerBarContainer solid' : 'headerBarContainer'}>
      <header className='Header-of'>
        <img className="headerLogo" src={logo} alt="Company Logo" />
        <nav>
          <ul>
            <li><p
            >INICIO</p></li>
            <li><p
            >SERVICIOS</p></li>
            <li><p
            >UBICACIÓN</p></li>
            <li><Link to="/signUp">RESERVA</Link></li>
          </ul>
          <span className="logIn_btn">
            <Link to='/logIn'>INICIAR SESIÓN</Link>
          </span>
        </nav>
      </header>
    </div >
  );
}

