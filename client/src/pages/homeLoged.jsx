import LocationBar from "../components/homePageComponent/locationBar/locationBar";
import FooterBar from "../components/footerBar/footerBar";
import HeaderBarLoged from "../components/homePageLogedComponent/headerLogedBar/headerLogedBar";

export default function HomeLoged() {
    return (
        <div>
            <body className="bodyHomeLoged">
                <HeaderBarLoged />
                <LocationBar />
            </body>
            <FooterBar />
        </div>
    )
    //<DescriptionBar />
    //<NewsBar />
    //<ServicesBar />
}