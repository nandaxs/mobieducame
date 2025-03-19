import React from "react";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route path="/login" element={<App/>} ></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;