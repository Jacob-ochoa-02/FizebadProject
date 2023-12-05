import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll} from 'react-scroll';
import './headerLogedBar.css';

export default function HeaderBarLoged() {
    const [clicks, setClicks] = useState(false);
    const [clickeds, setClickeds] = useState(false)
    const closeMenus = () => setClickeds(true);

    const settingClicks = () => {
        setClicks(!clicks);
    }

    const scrollToTops = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }

    function signOut() {
        document.cookie = `token =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
      
    return (
        <div className="headerLogedBarContainer">
            <header className='HeaderLoged-of'>
                <img className="headerLogedLogo" src={logo} alt="Company Logo" />
                <nav className={`navLoged ${clicks ? 'actives': ''} `}>
                    <ul className={clickeds ? 'ulLogged activeds':'ulLogged'}>
                        <li className="liLogged"><Link onClick={scrollToTops} to='/home'>INICIO</Link></li>
                        <li className="liLogged"><LinkScroll
                        className='paragOfLogged' to="canchas" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenus} >SERVICIOS</LinkScroll></li>
                        <li className="liLogged"><Link to="/reserve" onClick={scrollToTops}>RESERVA</Link></li>
                        <li className="liLogged"><LinkScroll className='paragOfLogged' to="location" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenus}>UBICACIÓN</LinkScroll></li>
                    </ul>
                    <span className="logOut_btn">
                        <Link to='/' onClick={signOut}>Cerrar Sesión</Link>
                    </span>
                </nav>
                    <span onClick={settingClicks} className='headerLoged_btn'>    
                        <img className="headerUser" src={user} alt="Perfil"/>
                    </span>
            </header>
        </div >
    );
}