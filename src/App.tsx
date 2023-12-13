// ? Importations des librairies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// ? Importation du style
import "./Styles/App.css";
// ? Importation des pages
import { Home } from "./Pages/Home";
import { Cards } from "./Pages/Cards";
import { AiBranch } from "./Pages/AiBranch";
import { ApprType } from "./Pages/ApprType";
function App() {
    // & States
    const [Clicked, setClicked] = React.useState<boolean>(false);
    const [AiType, setAiType] = React.useState<string>("");
    const [AiAppr, setAiAppr] = React.useState<string>("");

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
                        element={<AiBranch Clicked={Clicked} />}
                    />
                    <Route
                        path="/ApprType"
                        element={<ApprType />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
