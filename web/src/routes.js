import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Pages
import Home from "./views/Home/Home.js";
import About from "./views/About.js";
import Register from "./views/Register/Register.jsx";

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
                <Route element={<About />} path='/about' />
                <Route element={<Register />} path='/register' />
                <Route element={<h1>Page not found</h1>} path='*' />
            </Routes>
        </BrowserRouter>
    );
};

export default PageRoutes;