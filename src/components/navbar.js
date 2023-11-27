// React Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Function
export default function Navbar() {
   // useNavigate Call
   const navigate = useNavigate();

    // Navigation Functions
    function SignIn() {
        navigate("/signin")
    }

    function Start() {
        navigate("/")
    }

    return(
        <div className="navbar-container">
            <h1 className="logo-navbar" onClick={Start}>StreamMotion</h1>
            <button className="btn" onClick={SignIn}>Iniciar Sesión</button>
        </div>
    )
}