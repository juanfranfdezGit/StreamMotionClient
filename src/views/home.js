// React Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Components Imports
import Navbar from "../components/navbar"
import Footer from "../components/footer";

// Assets Imports
import section01back from "../assets/section1back.png"
import infantil from "../assets/infantil.png";

// Function
export default function Home() {
   // useNavigate Call
   const navigate = useNavigate();
   
    // Navigation Functions
   function SignUp() {
      navigate("/signup")
   }

    return (
       <div className="container">
            {/* Navbar */}
            <Navbar/>
            <div className="home-container">

               {/* Contain */}
               <div className="herobanner">
                  <h1>Las mejores historias donde y cuando quieras. Todo en StreamMotion</h1>
                  <p>Registrate en nuestra plataforma.</p>
                  <button className="btn" onClick={SignUp}>Registrate</button>
               </div>

               <div className="divider"></div>

               <div className="sections">
                  <div>
                     <img src={section01back} alt="mockups"></img>
                  </div>
                  <div className="text">
                     <h1>Desde cualquer dispositivo</h1>
                     <p>Disponible en móvil, tablet, pc o televisión.</p>
                  </div>
               </div>

               <div className="divider"></div>

               <div className="sections">
                  <div className="text">
                     <h1>Perfiles Infantiles</h1>
                     <p>Espacio dedicado para que los más peques disfruten con sus personajes favoritos.</p>
                  </div>
                  <div>
                     <img src={infantil} alt="infantil"></img>
                  </div>
               </div>

               <div className="divider"></div>

               {/* Footer */}
               <Footer/>

            </div>
       </div>
    )
 }