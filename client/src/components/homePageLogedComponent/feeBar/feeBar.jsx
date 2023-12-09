import './feeBar.css'

export default function FeeBar() {
    return (
        <div className="rates" id='rates'>
            <div className="fee Canje">
                <h1 className='titleOfFee t1'>SOCIO EN <br />CANJE</h1>
                <h2 className='tarifa'>Reserva: <p className='dollar'>$</p>25.000</h2>
                <h2 className='tarifa'>1 Clase: <p className='dollar'>$</p>55.000</h2>
                <h2 className='tarifa'>4 Clases: <p className='dollar'>$</p>210.000</h2>
                <h2 className='tarifa'>8 Clases: <p className='dollar'>$</p>420.000</h2>
            </div>
            <div className="fee Membresia">
                <h1 className='titleOfFee t2'>SOCIO EN <br />MEMBRESIA</h1>
                <h2 className='tarifa'>Reserva: <p className='dollar'>$</p>20.000</h2>
                <h2 className='tarifa'>1 Clase: <p className='dollar'>$</p>50.000</h2>
                <h2 className='tarifa'>4 Clases: <p className='dollar'>$</p>190.000</h2>
                <h2 className='tarifa'>8 Clases: <p className='dollar'>$</p>390.000</h2>
            </div>
            <div className="fee Ocasional">
                <h1 className='titleOfFee t3'>TERCERO Y OCASIONAL</h1>
                <h2 className='tarifa'>Reserva: <p className='dollar'>$</p>30.000</h2>
                <h2 className='tarifa'>1 Clase: <p className='dollar'>$</p>60.000</h2>
                <h2 className='tarifa'>4 Clases: <p className='dollar'>$</p>230.000</h2>
                <h2 className='tarifa'>8 Clases: <p className='dollar'>$</p>470.000</h2>
            </div>
        </div>
    )
}