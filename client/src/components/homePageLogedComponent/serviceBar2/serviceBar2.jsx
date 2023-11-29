import './serviceBar2.css';
import { Link } from 'react-router-dom';

export default function locationBar() {
    return (
        <div className='clasesContainer' id='clases'>
            <div className='clasesImage'>
                <div className='clasesInfo'>
                    <h1 id="clasesTitle">¡Agenda tus clases!</h1>
                    <h2>Ahora podrás agendar tus canchas con un sistema de reservas.</h2>
                    <Link className='reserveNow' to='/signUp'>¡Agendate Ya!</Link>
                </div>
                <section id="clasesBox">
                    <button className='servBtn' type="button">Clases</button>
                </section>
            </div>
        </div>
    )
}