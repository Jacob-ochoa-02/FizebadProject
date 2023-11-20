import './headerLogin.css';
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function headerLogin() {
    return (
        <div className='HeaderLogin'>
            <header className='Header-of'>
                <img className="headerLogo" src={logo} alt="Company Logo" />
                <span className="return-button" >
                    <a href="/">
                        <div className='return-button'></div>
                    </a>
                </span>
            </header>
        </div>
    );
}

