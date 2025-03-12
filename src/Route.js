import React from "react";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Teste from "./Teste";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path="/login" component={Teste} ></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;