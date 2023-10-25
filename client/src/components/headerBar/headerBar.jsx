import React, { useState, useEffect } from 'react';
import logo from "../../assets/images/logo.png"
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

  return (
    <div className={fix ? 'headerBarContainer solid':'headerBarContainer'}>
      <header className='Header-of'>
        <img className="headerLogo" src={logo} alt="Company Logo" />
        <nav>
          <ul>
            <li><a href=".">INICIO</a></li>
            <li><a href=".">SERVICIOS</a></li>
            <li><a href=".">UBICACIÓN</a></li>
            <li><a href=".">RESERVA</a></li>
          </ul>
          <span className="logIn_btn">
            <a href=".">INICIAR SESIÓN</a>
          </span>
        </nav>
      </header>
    </div>
  );
}

