import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
                <Route element={<About />} path='/about' />
                <Route element={<h1>Page not found</h1>} path='*' />
            </Routes>
        </BrowserRouter>
    );
};

export default PageRoutes;