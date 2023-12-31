import HeaderBar from "../components/homePageComponent/headerBar/headerBar"
import DescriptionBar from "../components/homePageComponent/descriptionBar/descriptionBar"
import NewsBar from "../components/homePageComponent/newsBar/newsBar"
import FooterBar from "../components/footerBar/footerBar"
import LocationBar from "../components/homePageComponent/locationBar/locationBar"
import ServicesBar from "../components/homePageComponent/servicesBar/servicesBar"
import IndexOf from "../components/homePageComponent/Index/indexOf"

export default function Home() {
    return (
        <div id="homeBody">
            <IndexOf/>
            <HeaderBar/>
            <DescriptionBar/>
            <NewsBar/>
            <ServicesBar/>
            <LocationBar/>
            <FooterBar/>
        </div>
    )
}
