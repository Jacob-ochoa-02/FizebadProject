import HeaderBarLoged from "../components/homePageLogedComponent/headerLogedBar/headerLogedBar";
import FeeBar from "../components/homePageLogedComponent/feeBar/feeBar";
import ServiceBar1 from "../components/homePageLogedComponent/serviceBar1/serviceBar1";
import ServiceBar2 from "../components/homePageLogedComponent/serviceBar2/serviceBar2";
import ServiceBar3 from "../components/homePageLogedComponent/serviceBar3/serviceBar3";
import LocationBar from "../components/homePageComponent/locationBar/locationBar";
import FooterBar from "../components/footerBar/footerBar";
import HeaderBarLoged from "../components/homePageLogedComponent/headerLogedBar/headerLogedBar";
import FeeBar from "../components/homePageLogedComponent/feeBar/feeBar";
import FirstServiceBar from "../components/homePageLogedComponent/serviceBar1/serviceBar1";
import SecondServiceBar from "../components/homePageLogedComponent/serviceBar2/serviceBar2";
import ThirdServiceBar from "../components/homePageLogedComponent/serviceBar3/serviceBar3";

export default function HomeLoged() {
    return (
        <div className="bodyHomeLoged">
            <HeaderBarLoged />
            <FeeBar/>
            <FirstServiceBar/>
            <SecondServiceBar/>
            <ThirdServiceBar/>
            <LocationBar />
            <FooterBar />
        </div>
    )
    //<DescriptionBar />
}
