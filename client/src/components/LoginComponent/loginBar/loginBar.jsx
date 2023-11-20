import './loginBar.css'
import { Link } from 'react-router-dom';

export default function HeaderBar() {
    return (
        <div className='loginContainer'>
            <div className='formContainer'>
                <h2>Acceder</h2>
                <form className="formulario">
                    <label className='usuarioText' htmlFor="usuario">Usuario:</label>
                    <input placeholder="Ingresa tu usuario" type="text" name="usuario" id="usuario" required />
                    <label className='contrasenaText' htmlFor="contrasena">Contraseña:</label>
                    <input placeholder="Ingresa tu contraseña" type="password" name="contrasena" id="contrasena" required />
                    <a className='forgetPassword' href='.'>Olvidaste la contraseña?</a>
                    <input type="submit" value="Confirmar" />
                    <Link className='noAcount' to='/signUp' >¿No tienes una cuenta? Regístrate</Link>
                </form>
            </div>
        </div>
    );
}