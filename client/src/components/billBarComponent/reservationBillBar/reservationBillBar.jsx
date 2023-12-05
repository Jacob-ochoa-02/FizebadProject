import { useState, useEffect } from 'react';
import './reservationBillBar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ReservationBillBar({usrEmail}) {
    const [reservInf, setReservInf] = useState([]);
    const resLengh = (reservInf.length - 1);
    const [currReservation, setCurrReserv] = useState([]);

    const scrollToTops = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const fetchingData = () => {
            axios.post('http://localhost:8000/reservesTo', {
                email: usrEmail,
            })
            .then(res => {
                setReservInf(res.data);
            })
        }
        fetchingData();
    },[]);
    
    useEffect(() => {
        setCurrReserv(reservInf[resLengh]);
    }, [reservInf]);
    
    return (
    <div className="cont" id='cont'>
        <h1 className="titleReserv">FACTURACION RESERVA</h1>
        <div className="bills">
            {currReservation ? (
                <>
                    <h1 className='dataBill1'>Referencia de pago: {currReservation.ID_Reserve}</h1>
                    <hr className='borde' />
                    <h2 className='dataBill'>Nombre del cliente: {currReservation.Email_FK}</h2>
                    <h2 className='dataBill'>Fecha: {currReservation.ReservationHour}</h2>
                    <h2 className='dataBill'>Total a pagar: <p className='dollar'>$</p>{currReservation.TurnFee +currReservation.Implements_FK}</h2>
                </>
            ) : (
                <p>No hay información de reserva</p>
            )}
            <Link onClick={scrollToTops} className='returnButton' to='/reserve'>Regresar</Link>
        </div>
    </div>
)
}