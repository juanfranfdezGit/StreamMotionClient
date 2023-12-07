// React Imports
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Components Imports
import Navbar from "../components/navbar"
import Footer from "../components/footer"

// Function
export default function Signup() {
    const navigate = useNavigate();
    
    const [values,setValues] = useState({
        email: '',
        password: '',
        profIMG: '',
    })

    const handleValues = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const password_pattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; //

        if (!values.email[0].match(email_pattern)) {
            alert("Introduzca el email correctamente");
        } else if (!values.password[0].match(password_pattern)) {
            alert("Introduzca una contraseña válida");
        } else if (values.profIMG[0] !== 'prof1' && values.profIMG[0] !== 'prof2' && values.profIMG[0] !== 'prof3' && values.profIMG[0] !== 'prof4') {
            alert("Seleccione una foto de perfil")
        } else {
            axios.post('http://localhost:3001/signup', values)
            .then(res => {navigate('/')})
            .catch(err => console.log("AxiosFail", err))
        }
    }

    return (
       <div className="container">
            {/* Navbar with start session button */}
            <Navbar/>

            {/* Form */}
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="email" id="email" placeholder="Email" onChange={handleValues}/>
                    <input type="password" name="password" id="password" placeholder="Contraseña" onChange={handleValues}/>
                    <label>*Recuerda que la contraseña debe: tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula*</label>
                    <div className="radios">
                        <input type="radio" name="profIMG" id="profIMG1" value="prof1" className="profImgs" onChange={handleValues}/>
                        <input type="radio" name="profIMG" id="profIMG2" value="prof2" className="profImgs" onChange={handleValues}/>
                        <input type="radio" name="profIMG" id="profIMG3" value="prof3" className="profImgs" onChange={handleValues}/>
                        <input type="radio" name="profIMG" id="profIMG4" value="prof4" className="profImgs" onChange={handleValues}/>
                    </div>
                    <button type="submit" className="btn btn-form">Registrarse</button>
                </form>
            </div>

            {/* Footer */}
            <Footer/>
       </div>
    )
 }