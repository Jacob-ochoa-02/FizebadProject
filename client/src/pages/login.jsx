import FooterBar from "../components/footerBar/footerBar";
import HeaderLogin from "../components/LoginComponent/headerLogin/headerLogin";
import LoginBar from "../components/LoginComponent/loginBar/loginBar";


export default function Login() {
    return (
        <div>
            <body className="logInBody">
                <HeaderLogin />
                <LoginBar />
            </body>
            <FooterBar />
        </div>
    )
}
