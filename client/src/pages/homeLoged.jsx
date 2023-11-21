import LocationBar from "../components/homePageComponent/locationBar/locationBar";
import FooterBar from "../components/footerBar/footerBar";
import HeaderBarLoged from "../components/homePageLogedComponent/headerLogedBar/headerLogedBar";

export default function HomeLoged() {
    return (
        <div id="bodyHomeLoged">
            <HeaderBarLoged />
            <LocationBar />
            <FooterBar />
        </div>
    )
    //<DescriptionBar />
    //<NewsBar />
    //<ServicesBar />
}