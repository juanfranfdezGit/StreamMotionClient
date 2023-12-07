// React Imports
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Views Imports
import Home from "../views/home"
import Signup from "../views/signup"
import Signin from "../views/signin"
import Films from "../views/films";
import User from "../views/edit";

// Function
export default function Pages() {
    return (

        // Configuración de rutas mediante react-router-dom
        <BrowserRouter>

            {/* Start Route */}
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>

            {/* Signup Route */}
            <Routes>
                <Route path="/signup" element={<Signup/>}></Route>
            </Routes>

            {/* Signin Route */}
            <Routes>
                <Route path="/signin" element={<Signin/>}></Route>
            </Routes>

            {/* Films Route */}
            <Routes>
                <Route path="/films" element={<Films/>}></Route>
            </Routes>

            {/* User Route */}
            <Routes>
                <Route path="/user" element={<User/>}></Route>
            </Routes>

        </BrowserRouter>
    )
}