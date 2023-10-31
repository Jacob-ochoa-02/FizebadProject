import './headerLogin.css'
import logo from "../../../assets/images/logo.png"

export default function headerLogin() {
    return (
        <div className='HeaderLogin'>
            <header className='Header-of'>
                <img className="headerLogo" src={logo} alt="Company Logo" />
                <a href="." >
                    <div className="return-button"></div>
                </a>
            </header>
        </div>
    );

}

