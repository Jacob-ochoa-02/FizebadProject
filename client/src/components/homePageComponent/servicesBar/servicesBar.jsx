import './servicesBar.css'
import { Link } from 'react-router-dom';

export default function ServicesBar() {
    return (
        <div className="servicesBarContainer">
            <h1>NUESTROS SERVICIOS</h1>
            <div className="servicesSections">
                <section className="fieldBox">
                    <button type="button">Canchas</button>
                </section>
                <section className="classesBox">
                    <button type="button">Clases</button>
                </section>
                <section className="implementsBox">
                    <button type="button">Implementos</button>
                </section>
            </div>
            <Link className='reserveNow' to='/signUp'>¡Reserva Ahora!</Link>
        </div>
    )
}