import HeaderBar from "../components/homePageLogedComponent/headerLogedBar/headerLogedBar";
import FooterBar from "../components/footerBar/footerBar";
import ReservationBillBar from "../components/billBarComponent/reservationBillBar/reservationBillBar";

export default function Bill({userEmail}) {
    return (
        <div id="bodyBill">
            <HeaderBar />
            <ReservationBillBar usrEmail={userEmail}/>
            <FooterBar />
        </div>
    )
}