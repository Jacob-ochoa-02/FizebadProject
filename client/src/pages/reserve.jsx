import ReserveBar from "../components/Reserve/reserveBar";
import FooterBar from "../components/footerBar/footerBar";
import HeaderBarLoged from "../components/homePageLogedComponent/headerLogedBar/headerLogedBar";

export default function Reserve({userEmail}) {
    return (
        <div>
            <HeaderBarLoged/>
            <ReserveBar usrEmail={userEmail}/>
            <FooterBar/>
        </div>
    )
}