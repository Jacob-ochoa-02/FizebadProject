import { useEffect, useState } from 'react';
import './loginBar.css';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function HeaderBar() {
    const [emailLog, setEmail] = useState('')
    const [passLog, setPass] = useState('')

    let navigate = useNavigate();

    const validating = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:8000/user', { 
            email: emailLog,
            password: passLog,
    }).then((res) => {
        if(res.data === 'Success') {
            navigate('/home');
        }else {
            alert('Could\'nt log in :c');
        }
    });
    }

    return (
        <div className='loginContainer'>
            <div className='formContainer'>
                <h2 id='logInTitle'>Acceder</h2>
                <form className="formulario" onSubmit={validating}>
                    <label htmlFor="usuario" id='userLabel'>Usuario:</label>
                    <input placeholder="Ingresa tu usuario" type="text" name="usuario" id="userInpt" required 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                    <label htmlFor="contrasena" id='passLabel'>Contraseña:</label>
                    <input placeholder="Ingresa tu contraseña" type="password" id="passInpt" required 
                    onChange={(e)=> {
                        setPass(e.target.value);
                    }}/>
                    <a href='/forgotPass' id='forgPass'>¿Olvidaste tu contraseña?</a>
                    <input disabled={!emailLog || !passLog} type="submit" value="Confirmar" id='logInBtn' />
                    <span id='registerContainer'>
                    <p id='stillNotAcc'>¿Aún no tienes una cuenta?</p>
                    <Link to={'/signUp'} id='toRegister'>¡Regístrate Ahora!</Link>
                    </span>
                </form>
            </div>
        </div>
    );
}