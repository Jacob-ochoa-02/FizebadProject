import './locationBar.css';

export default function locationBar() {
    return (
        <div className='locationBarContainer'>
            <h1>¿DÓNDE NOS UBICAMOS?</h1>
            <div className='locationImage'>
                <div className='imageOf'></div>
                <h2>Km 27 de la vía Las Palmas
                    en El Retiro, Antioquia.</h2>
                <a className='goToMaps' target='_blank' href='https://www.google.com/maps/place/Hacienda+Fizebad/@6.0994428,-75.5087603,15z/data=!4m9!3m8!1s0x8e469b3ec36f0efd:0xc860edca56b83aa2!5m2!4m1!1i2!8m2!3d6.0994428!4d-75.5087603!16s%2Fg%2F1hc5xnjhh?entry=ttu'>
                    <button>Ir a maps</button>
                </a>
            </div>
        </div>
    )
}