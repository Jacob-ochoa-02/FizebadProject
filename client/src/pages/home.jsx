import HeaderBar from "../components/headerBar/headerBar"
import DescriptionBar from "../components/descriptionBar/descriptionBar"
import NewsBar from "../components/newsBar/newsBar"
import FooterBar from "../components/footerBar/footerBar"
import ServicesBar from "../components/servicesBar/servicesBar"

export default function Home() {
    return (
        <div>
            <HeaderBar/>
            <DescriptionBar/>
            <NewsBar/>
            <ServicesBar/>
            <FooterBar/>
        </div>
    )
}
