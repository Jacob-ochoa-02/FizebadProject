import './servicesBar.css'

export default function servicesBar() {
    return (
        <div className="servicesBarContainer">
            <h1>NUESTROS SERVICIOS</h1>
            <div className="servicesSections">
                <section className="fieldBox">
                    <button type="button">Canchas</button>
                </section>
                <section className="classesBox">
                    <button type="button">Clases</button>
                </section>
                <section className="implementsBox">
                    <button type="button">Implementos</button>
                </section>
            </div>
            <button className='reserveNow' type='button'>¡Reserva Ahora!</button>
        </div>
    )
}