// ? Importation des librairies
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// ? Importation du style
import "../Styles/Pages/AiBranch.css";

export const AiBranch = () => {
    return (
        <div className="AiBranch_section">
            <div className="AiBranch_section_Title">
                <Link to="/">
                    <FaArrowLeft />
                </Link>
                <h2>Quel type d'IA recherchez vous ?</h2>
            </div>
            <div className="AiBranch_section_Cards">
                <div className="Card">
                    <img
                        src="/img/generative.png"
                        alt="Logo IA Generative"
                    />
                </div>
                <div className="Card">
                    <img
                        src="/img/predictive.png"
                        alt="Logo IA Predictive"
                    />
                </div>
            </div>
        </div>
    );
};
