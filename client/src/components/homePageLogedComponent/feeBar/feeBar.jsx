import './feeBar.css'

export default function FeeBar() {
    return (
        <div className="rates" id='rates'>
            <h1 className='titleOfFee'>NUESTRAS TARIFAS</h1>
            <div className="feeCanje">
                <h2 className='titleOfFee2'>Socio en canje</h2>
                <h2 className='prueba'>Prueba</h2>
            </div>
            <div className="feeMembresia">
                <h2 className='titleOfFee2'>Socio en membresía</h2>
            </div>
            <div className="feeOcasional">
                <h2 className='titleOfFee2'>Tercero y ocasional</h2>
            </div>
        </div>
    )
}