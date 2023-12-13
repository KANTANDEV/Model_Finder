//? Importations des librairie
import { Link } from "react-router-dom";
//? Importations du style
import "../Styles/Components/NavBar.css";

export const NavBar = () => {
    return (
        <Link
            className="link-no-decoration"
            to="/"
        >
            <div className="NavBar">
                <img src="/img/logo.png" />
                <h1>Model Finder</h1>
            </div>
        </Link>
    );
};
