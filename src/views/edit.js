// React Imports
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Components Imports
import Footer from "../components/footer"

// Function
export default function User() {
     // useNavigate Call
     const navigate = useNavigate();

     // Navigation Functions
    function SingOut() {
        try {
            axios.post('https://stump-keen-stinger.glitch.me/logout', {
                method: 'POST',
                withCredentials: true,
            })
            .then(() => navigate("/"));
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    }

    function Delete() {
        const confirm = window.confirm('¿Seguro que deseas eliminar su cuenta?')

        if (confirm) {
            try {
                axios.post('https://stump-keen-stinger.glitch.me/delete', {},{ withCredentials: true, })
                .then(() => navigate("/"));
            } catch (error) {
                console.error("Error during delete:", error);
            }
        } 
    }

     function Edit() {
         navigate("/user")
     }
 
     function Home() {
         navigate("/films")
     }
 
     // Estado y funcion para manejar el usuario
     const [user, setUser] = useState([]);
 
     // Recoge datos de nuestra base de datos
     const getUser = async () => {
        try {
            const response = await axios.get('https://stump-keen-stinger.glitch.me/edit', {
                method: 'GET',
                withCredentials: true,
            });

            setUser(response.data);

            if (response.data.length > 0) {
                setValues(response.data[0]);
            }

        } catch (error) {
            console.error("Error al obtener datos del usuario:", error);
    }}
 
     // Ejecuta la funcion una vez montado nuestro componente
     useEffect(() => getUser, []);

    const [values,setValues] = useState({
        email: '',
        password: '',
        profIMG: '',
    })

    const handleValues = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const password_pattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; //

        if (!values.email.match(email_pattern)) {
            alert("Introduzca el email correctamente");
        } else if (!values.password.match(password_pattern)) {
            alert("Introduzca una contraseña válida");
        } else {
            axios.post('https://streammotionserver.onrender.com/edit', values, { withCredentials: true })
            .then(res => {navigate('/films')})
            .catch(err => console.log("AxiosFail", err))
        }
    }
     
    return (
       <div className="container">
            {
            user.map((user) => (
                <div>
                    <div className="navbar-container">
                        <h1 className="logo-navbar" onClick={Home}>StreamMotion</h1>
                        <div>
                            <button className="btn" onClick={SingOut}>Cerrar Sesión</button>
                            <div className={user.profIMG} onClick={Edit}/>
                        </div>
                    </div>

                    <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="editInput">
                            <input type="text" name="email" id="email" defaultValue={user.email} onChange={handleValues}/>
                            <button type="submit" className="btn btn-form btn-edit">Editar Email</button>
                        </div>
                        <div className="editInput">
                            <input type="password" name="password" id="password" defaultValue={user.password} onChange={handleValues}/>
                            <button type="submit" className="btn btn-form btn-edit">Editar Contraseña</button>
                        </div>
                        <div className="radios">
                            <input type="radio" name="profIMG" id="profIMG1" defaultValue="prof1" checked={values.profIMG === "prof1"} className="profImgs" onChange={handleValues}/>
                            <input type="radio" name="profIMG" id="profIMG2" defaultValue="prof2" checked={values.profIMG === "prof2"} className="profImgs" onChange={handleValues}/>
                            <input type="radio" name="profIMG" id="profIMG3" defaultValue="prof3" checked={values.profIMG === "prof3"} className="profImgs" onChange={handleValues}/>
                            <input type="radio" name="profIMG" id="profIMG4" defaultValue="prof4" checked={values.profIMG === "prof4"} className="profImgs" onChange={handleValues}/>
                        </div>
                        <button type="submit" className="btn btn-form btn-edit">Cambiar Imagen</button>
                        <div className="divider"></div>    
                        <div className="btn btn-form btn-delete" onClick={Delete}>Eliminar mi Perfil</div>      
                    </form>
                    
                    </div>
                </div>
                ))
            }

            {/* Footer */}
            <Footer/>
       </div>
    )
 }