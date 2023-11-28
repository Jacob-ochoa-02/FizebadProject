import { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './loginBar.css';

const LogIn = () => {
    const [emailLog, setEmail] = useState('');
    const [passLog, setPass] = useState('');
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:8000/logIn', {
            email: emailLog,
            password: passLog,
        }).then((res) => {
            if (res.data.Status === "Success") {
                navigate('/home');
            } else {
                alert(res.data.Error);
            }
        });
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='loginContainer'>
            <div className='formContainer'>
                <h2 id='logInTitle'>Acceder</h2>
                <form className="formulario" onSubmit={handleSubmit}>
                    <label htmlFor="usuario" id='userLabel'>Usuario:</label>
                    <input placeholder="Ingresa tu usuario" type="text" name="usuario" id="userInpt" required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    <label htmlFor="contrasena" id='passLabel'>Contraseña:</label>
                    <input placeholder="Ingresa tu contraseña" type="password" id="passInpt" required
                        onChange={(e) => {
                            setPass(e.target.value);
                        }} />
                    <a href='/forgotPass' id='forgPass'>¿Olvidaste tu contraseña?</a>
                    <input disabled={!emailLog || !passLog} type="submit" value="Confirmar" id='logInBtn' />
                    <span id='registerContainer'>
                        <p id='stillNotAcc'>¿Aún no tienes una cuenta?</p>
                        <Link to={'/signUp'} id='toRegister' onClick={scrollToTop}>¡Regístrate Ahora!</Link>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
