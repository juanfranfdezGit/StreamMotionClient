// React Imports
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Components Imports
import Navbar from "../components/navbar"
import Footer from "../components/footer"

// Function
export default function Signin() {
    const navigate = useNavigate();
    
    const [values,setValues] = useState({
        email: '',
        password: '',
    })

    const handleValues = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('https://streammotionserver.onrender.com/signin', values, { withCredentials: true })
            .then(res => {
                navigate('/films');
            })
            .catch(err => {
                console.log("AxiosFail", err);
                alert("Usuario No Encontrado");
            })
    }

    return (
       <div className="container">
            {/* Navbar */}
            <Navbar/>

            {/* Form */}
            <div className="form-container signin">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="email" id="email" placeholder="Email" onChange={handleValues}/>
                    <label>*Recuerda que la contraseña debe: tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula*</label>
                    <input type="password" name="password" id="password" placeholder="Contraseña" onChange={handleValues}/>
                    <button type="submit" className="btn btn-form">Iniciar Sesión</button>
                </form>
            </div>

            {/* Footer */}
            <Footer/>
       </div>
    )
 }