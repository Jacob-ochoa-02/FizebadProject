import './notFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div id='notFoundContainer'>
            <div className='notFoundMessage'>
                <h1 id='notFoundTitle'>
                    404 Not Found
                </h1>
                <hr />
                    <span id='returnSpace'>
                        <p>Deseas regresar al inicio?</p>
                        <Link className="returnBtnNF" to='/'>Regresar</Link>
                    </span>
            </div>
        </div>
    )
}