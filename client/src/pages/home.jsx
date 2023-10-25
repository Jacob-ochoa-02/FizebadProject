import HeaderBar from "../components/homePageComponent/headerBar/headerBar"
import DescriptionBar from "../components/homePageComponent/descriptionBar/descriptionBar"
import NewsBar from "../components/homePageComponent/newsBar/newsBar"
import FooterBar from "../components/homePageComponent/footerBar/footerBar"
import ServicesBar from "../components/homePageComponent/servicesBar/servicesBar"

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
