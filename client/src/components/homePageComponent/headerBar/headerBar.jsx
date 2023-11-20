import React, { useState, useEffect } from 'react';
import logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom";
import { Link as LinkScroll} from "react-scroll";
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

  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false);

  return (
    <div className={fix ? 'headerBarContainer solid' : 'headerBarContainer'}>
      <header className='Header-of'>
        <img className="headerLogo" src={logo} alt="Company Logo" />
        <nav className='navBarOfHome'>
          <ul className={click ? 'ulOfHome active':'ulOfHome'}>
            <li className='liOfHome'><LinkScroll className='paragOfHome' to="homePage" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>INICIO</LinkScroll></li>
            <li className='liOfHome'><LinkScroll className='paragOfHome' to="services" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>SERVICIOS</LinkScroll></li>
            <li className='liOfHome'><LinkScroll className='paragOfHome' to="location" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>UBICACIÓN</LinkScroll></li>
            <li className='liOfHome'><Link id="reserveNow" to="/signUp">RESERVA</Link></li>
          </ul>
          <span className="logIn_btn">
            <Link to='/logIn'>INICIAR SESIÓN</Link>
          </span>
        </nav>
      </header>
    </div >
  );
}

