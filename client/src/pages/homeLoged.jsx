import HeaderBarLoged from "../components/homePageLogedComponent/headerLogedBar/headerLogedBar";
import FeeBar from "../components/homePageLogedComponent/feeBar/feeBar";
import ServiceBar1 from "../components/homePageLogedComponent/serviceBar1/serviceBar1";
import ServiceBar2 from "../components/homePageLogedComponent/serviceBar2/serviceBar2";
import ServiceBar3 from "../components/homePageLogedComponent/serviceBar3/serviceBar3";
import LocationBar from "../components/homePageComponent/locationBar/locationBar";
import FooterBar from "../components/footerBar/footerBar";


export default function HomeLoged() {
    return (
        <div id="bodyHomeLoged">
            <HeaderBarLoged />
            <FeeBar />
            <ServiceBar1 />
            <ServiceBar2 />
            <ServiceBar3 />
            <LocationBar />
            <FooterBar />
        </div>
    )
    //<DescriptionBar />
}
