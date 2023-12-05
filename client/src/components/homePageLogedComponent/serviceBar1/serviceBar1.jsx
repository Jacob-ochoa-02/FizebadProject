import './serviceBar1.css';
import { Link } from 'react-router-dom';

export default function FirstServiceBar() {
    const scrollToTops = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    return (
        <div className='canchasContainer' id='canchas'>
            <div className='canchasImage'>
                <section id="canchasBox">
                    <button className='servBtn' type="button">Canchas</button>
                </section>
                <div className='canchasInfo'>
                    <h1 id="canchasTitle">¡Agenda tu cancha!</h1>
                    <h2 className='infoReserv1'>Ahora podrás agendar tus canchas con un sistema de reservas.</h2>
                    <Link onClick={scrollToTops} className='reserveNowCanch' to='/reserve'>¡Agendate Ya!</Link>
                </div>
            </div>
        </div>
    )
}
