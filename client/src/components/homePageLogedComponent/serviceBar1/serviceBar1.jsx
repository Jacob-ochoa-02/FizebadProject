import './serviceBar1.css';
import { Link } from 'react-router-dom';

export default function FirstServiceBar() {
    return (
        <div className='canchasContainer' id='canchas'>
            <div className='canchasImage'>
                <section id="canchasBox">
                    <button className='servBtn' type="button">Canchas</button>
                </section>
                <div className='canchasInfo'>
                    <h1 id="canchasTitle">¡Agenda tu cancha!</h1>
                    <h2>Ahora podrás agendar tus canchas con un sistema de reservas.</h2>
                    <Link className='reserveNowCanch' to='/reserve'>¡Agendate Ya!</Link>
                </div>
            </div>
        </div>
    )
}
