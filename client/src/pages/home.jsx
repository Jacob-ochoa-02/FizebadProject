import HeaderBar from "../components/homePageComponent/headerBar/headerBar";
import DescriptionBar from "../components/homePageComponent/descriptionBar/descriptionBar";
import NewsBar from "../components/homePageComponent/newsBar/newsBar";
import LocationBar from "../components/homePageComponent/locationBar/locationBar";
import ServicesBar from "../components/homePageComponent/servicesBar/servicesBar";
import FooterBar from "../components/footerBar/footerBar";

export default function Home() {
    return (
        <div>
            <body className="bodyHome">
                <HeaderBar />
                <DescriptionBar />
                <NewsBar />
                <ServicesBar />
                <LocationBar />
            </body>
            <FooterBar />
        </div>
    )
}
