import './loginBar.css'

export default function HeaderBar() {
    return (
        <div className='loginContainer'>
            <div className='formContainer'>
                <h2>Acceder</h2>
                <form name="formulario">
                    <label for="usuario">Usuario:</label>
                    <input placeholder="Ingresa tu usuario" type="text" name="usuario" id="usuario" required />
                    <label for="contrasena">Contraseña:</label>
                    <input placeholder="Ingresa tu contraseña" type="password" name="contrasena" id="contrasena" required />
                    <input type="submit" value="Confirmar" />
                </form>
            </div>
        </div>
    );
}