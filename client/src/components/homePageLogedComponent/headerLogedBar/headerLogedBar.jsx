import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.png";

import { Link } from "react-router-dom";
import './headerLogedBar.css';

export default function HeaderBarLoged() {
    return (
        <div className="headerLogedBarContainer">
            <header className='HeaderLoged-of'>
                <img className="headerLogedLogo" src={logo} alt="Company Logo" />
                <nav className="navLoged">
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