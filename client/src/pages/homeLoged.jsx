import HeaderBarLoged from "../components/homePageLogedComponent/headerLogedBar/headerLogedBar";
import FeeBar from "../components/homePageLogedComponent/feeBar/feeBar";
import NewsBar1 from "../components/homePageLogedComponent/newsBar1/newsBar1";
import NewsBar2 from "../components/homePageLogedComponent/newsBar2/newsBar2";
import NewsBar3 from "../components/homePageLogedComponent/newsBar3/newsBar3";
import LocationBar from "../components/homePageComponent/locationBar/locationBar";
import FooterBar from "../components/footerBar/footerBar";


export default function HomeLoged() {
    return (
        <div id="bodyHomeLoged">
            <HeaderBarLoged />
            <FeeBar />
            <NewsBar1 />
            <NewsBar2 />
            <NewsBar3 />
            <LocationBar />
            <FooterBar />
        </div>
    )
    //<DescriptionBar />
}