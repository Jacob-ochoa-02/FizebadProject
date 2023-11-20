import React, { useState, useEffect } from 'react';
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.png";

import { Link } from "react-router-dom";
import './headerLogedBar.css';

export default function HeaderBarLoged() {
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
                        <li><p>INICIO</p></li>
                        <li><p>SERVICIOS</p></li>
                        <li><p>UBICACIÓN</p></li>
                        <li><Link to="/signUp">RESERVA</Link></li>
                    </ul>
                    <span className="headerLoged_btn">
                        <a href="/">
                            <img className="headerUser" src={user} alt="Perfil"></img>
                        </a>
                    </span>
                </nav>
            </header>
        </div >
    );
}