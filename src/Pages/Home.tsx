// ? Importation des modules
import { Link } from "react-router-dom";
// ? Importation du style
import "../Styles/Pages/Home.css";
export const Home = () => {
    return (
        <section className="Home_section">
            <div className="Home_section__AiBranch">
                <img src="/img/logo.png" />
                <h2>Bienvenue sur Model Finder !</h2>
                <p>Que souhaitez vous faire ?</p>
            </div>

            <div className="Home_section_Cards">
                <Link
                    to="/AiBranch"
                    className="card"
                >
                    <div>Trouvez un model</div>
                </Link>
                <Link
                    to="/Cards"
                    className="card"
                >
                    <div>Voir les models</div>
                </Link>
            </div>
        </section>
    );
};
