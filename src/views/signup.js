// Components Imports
import Navbar from "../components/navbar"
import Footer from "../components/footer"

// Function
export default function Signup() {

    return (
       <div className="container">
            {/* Navbar with start session button */}
            <Navbar/>

            {/* Form */}
            <div className="form-container">
                <form>
                    <input type="text" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Contraseña"/>
                    <input type="password" name="password" id="password" placeholder="Confirma la contraseña"/>
                    <label>*Recuerda que la contraseña debe: tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula*</label>
                    <button type="submit" className="btn btn-form">Registrarse</button>
                </form>
            </div>

            {/* Footer */}
            <Footer/>
       </div>
    )
 }