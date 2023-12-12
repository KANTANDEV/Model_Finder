// ? Importations des librairies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// ? Importation du style
import "./Styles/App.css";
// ? Importation des pages
import { Home } from "./Pages/Home";
import { Cards } from "./Pages/Cards";
import { AiBranch } from "./Pages/AiBranch";
function App() {
    // & States
    const [AiBranchValue, setAiBranchValue] = useState<string>("");
    const [BranchValue, setBranchValue] = useState<string>("");

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/Cards"
                        element={<Cards />}
                    />
                    <Route
                        path="/AiBranch"
                        element={<AiBranch />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
