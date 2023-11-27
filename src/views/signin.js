// React Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Components Imports
import Navbar from "../components/navbar"
import Footer from "../components/footer"

// Function
export default function Signup() {
   // useNavigate Call
   const navigate = useNavigate();

    function signin() {
        navigate("/films")
    }

    return (
       <div className="container">
            {/* Navbar */}
            <Navbar/>

            {/* Form */}
            <div className="form-container signin">
                <form>
                    <input type="text" name="email" id="email" placeholder="Email"/>
                    <label>*Recuerda que la contraseña debe: tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula*</label>
                    <input type="password" name="password" id="password" placeholder="Contraseña"/>
                    <button type="submit" className="btn btn-form" onClick={signin}>Iniciar Sesión</button>
                </form>
            </div>

            {/* Footer */}
            <Footer/>
       </div>
    )
 }