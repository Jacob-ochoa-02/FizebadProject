import logo from '../../assets/images/logo.png'
import "./footerBar.css"

export default function footerBar() {
    return (
        <div>
            <footer className="footerOfApp">
                <section className='madeBy'>
                    <p>Made by: Jacob Ochoa Lopera</p>
                    <p>Miguel Ángel Salazar Rincón</p>
                </section>
                <div className="otherLinks">
                    <a href=".">
                        <img src={logo} className='FooterLogo' alt='Company logo'/>
                    </a>
                    <div className="socialNetworks">
                        <a href="https://www.facebook.com/ClubHaciendaFizebad/" target='blank'>
                            <span id="facebook"></span>
                        </a>
                        <a href="https://www.youtube.com/channel/UCwMSCSpL1pF9Ny8Yb54Hy9A" target='blank'>
                            <span id="youtube"></span>
                        </a>
                        <a href="https://www.instagram.com/hacienda_fizebad/?hl=es-la" target='blank'>
                            <span id="instagram"></span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}