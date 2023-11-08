import "./descriptionBar.css";
import { Link } from "react-router-dom";

export default function DescriptionBar() {
    return (
        <div>
            <div className="description">
                <h2><span>FIZEBAD</span> TENIS</h2>
                <p>Fizebad tenis, un lugar para divertirte, disfrutar y practicar del deporte que tanto te gusta.</p>
                <span className="join_now">
                    <Link to="/logIn">!Únete Ya!</Link>
                </span>
            </div>
        </div>
    )
}