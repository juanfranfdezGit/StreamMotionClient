// React Imports
import React from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

// Assets Imports
import credits from "../assets/credits.mp4"
import backBtn from "../assets/backBtn.png"

// Function
export default function Credits() {
   // useNavigate Call
   const navigate = useNavigate();

    // Navigation Functions
    function Back() {
        navigate("/films")
    }

    return(
        <div className="creditsContainer">
            <div className="creditVideo">
                <ReactPlayer url={credits} playing="true" muted="true" loop width="100%" height="100%"/>
            </div>
            <div className="credits">
                <h1><span>S</span>tream<span>M</span>otion</h1>
                <h2>Juan Francisco Romero Fdez</h2>
                <p>Desarrollo Web Full Stack Development</p>
            </div>
            <div className="back-btn"><img src={backBtn} onClick={Back}/></div>
        </div>      
    )
}