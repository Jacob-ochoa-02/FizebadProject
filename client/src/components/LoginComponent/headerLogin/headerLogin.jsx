
import './headerLogin.css'
import logo from "../../../assets/images/logo.png"
import React, { useEffect, useState } from 'react'
export default function HeaderLogin() {
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
                <a id='retBtn' href="/" >
                    <div className="returnBtn"></div>
                </a>

            </header>
        </div>
    );
}

