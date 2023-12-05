import './serviceBar3.css';
import { Link } from 'react-router-dom';

export default function ThirdServiceBar() {
    const scrollToTops = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div className='implementosContainer' id='implementos'>
            <div className='implementosImage'>
                <section id="implementosBox">
                    <button className='implementosBtn' type="button">implementos</button>
                </section>
                <div className='implementosInfo'>
                    <h1 id="implementosTitle">Inventario de implementos</h1>
                    <h2 className='infoReserv3'>Observa los implementos con los que contamos para <br /> 
                    alquilarteen tu reserva programada para prácticar de este deporte.</h2>
                    <Link onClick={scrollToTops} className='reserveNow3' to='/reserve'>Ver más</Link>
                </div>
            </div>
        </div>
    )
}