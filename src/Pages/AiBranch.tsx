// ? Importation des librairies
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// ? Importation des composants
import { NavBar } from "../Components/NavBar";
// ? Importation du style
import "../Styles/Pages/AiBranch.css";

export const AiBranch = () => {
    const [Clicked, setClicked] = React.useState<boolean>(false);
    const [AiType, setAiType] = React.useState<string>("");
    return (
        <>
            <NavBar />
            <div className="AiBranch_section">
                <div className="AiBranch_section_Title">
                    <Link to="/">
                        <FaArrowLeft />
                    </Link>
                    <h2>Quel type d'IA recherchez vous ?</h2>
                </div>
                <Link to="/ApprType">
                    <div className="AiBranch_section_Cards">
                        <div
                            className="Card"
                            onClick={() => setAiType("generative")}
                        >
                            <img
                                src="/img/generative.png"
                                alt="Logo IA Generative"
                            />
                        </div>
                        <div
                            className="Card"
                            onClick={() => setAiType("predictive")}
                        >
                            <img
                                src="/img/predictive.png"
                                alt="Logo IA Predictive"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};
