import './servicesBar.css'
import { Link } from 'react-router-dom';

export default function ServicesBar() {
    return (
        <div className="services" id='services'>
            <h1 className='titleOfServices'>NUESTROS SERVICIOS</h1>
            <div className="servicesSections">
                <section id="fieldBox">
                    <button className='servBtn' type="button">Canchas</button>
                </section>
                <section id="classesBox">
                    <button className='servBtn' type="button">Clases</button>
                </section>
                <section id="implementsBox">
                    <button className='servBtn' type="button">Implementos</button>
                </section>
            </div>
            <Link className='reserveNow' to='/logIn'>¡Reserva Ahora!</Link>
        </div>
    )
}