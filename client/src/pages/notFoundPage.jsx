import NotFound from "../components/notFound/notFound.jsx"
import FooterBar from "../components/footerBar/footerBar.jsx"
import AnotherHeaderBar from "../components/notFound/anotherHeader.jsx"
export default function NotFoundPage() {
    return (
        <div id="notFoundBody">
            <AnotherHeaderBar/>
            <NotFound/>
            <FooterBar/>
        </div>
    )
}