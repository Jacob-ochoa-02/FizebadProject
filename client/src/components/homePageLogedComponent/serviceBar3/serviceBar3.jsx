import './serviceBar3.css';
import { Link } from 'react-router-dom';

export default function locationBar() {
    return (
        <div className='implementosContainer' id='implementos'>
            <div className='implementosImage'>
                <section id="implementosBox">
                    <button className='implementosBtn' type="button">implementos</button>
                </section>
                <div className='implementosInfo'>
                    <h1 id="implementosTitle">Inventario de implementos</h1>
                    <h2>Observa los implementos con los que contamos para alquilarte
                        en tu reserva programada para prácticar de este deporte.</h2>
                    <Link className='reserveNow' to='/signUp'>Ver más</Link>
                </div>
            </div>
        </div>
    )
}