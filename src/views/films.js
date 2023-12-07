// React Imports
import ReactPlayer from "react-player";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Components Imports
import Footer from "../components/footer"

// Assets Imports
import esdla1 from "../assets/esdla1.webp"
import esdla2 from "../assets/esdla2.webp"
import esdla3 from "../assets/esdla3.webp"
import mariposa from "../assets/mariposa.webp"
import inside from "../assets/inside.webp"
import naruto from "../assets/naruto.webp"
import evangelion from "../assets/evangelion.webp"
import hp1 from "../assets/hp1.webp"
import hp2 from "../assets/hp2.webp"
import hp3 from "../assets/hp3.webp"
import hp4 from "../assets/hp4.webp"
import hp5 from "../assets/hp5.webp"
import hp6 from "../assets/hp6.webp"
import hp7 from "../assets/hp7.webp"
import hp8 from "../assets/hp8.webp"
import white from "../assets/white.webp"
import brooklyn from "../assets/brooklyn.webp"
import suits from "../assets/suits.webp"
import exorcista from "../assets/exorcista.webp"
import mulan from "../assets/mulan.webp"
import trailer1 from "../assets/trailer1.mp4"
import playico from "../assets/playico.png"

// Function
export default function Films() {
    // useNavigate Call
    const navigate = useNavigate();

    // Navigation Functions
    function SingOut() {
        try {
            axios.post('http://localhost:3001/logout', {
                method: 'POST',
                withCredentials: true,
            })
            .then(() => navigate("/"));
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    }

    function Home() {
        navigate("/films")
    }

    function Edit() {
        navigate("/user")
    }

    // Estado y funcion para manejar el usuario
    const [user, setUser] = useState([]);

    // Recoge datos de nuestra base de datos
    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:3001/films', {
                method: 'GET',
                withCredentials: true,
            });

            setUser(response.data);

        } catch (error) {
            console.error("Error al obtener datos del usuario:", error);
    }}

    // Ejecuta la funcion una vez montado nuestro componente
    useEffect(() => getUser, []);

    return (
        <div className="container filmsPage">
            {/* Navbar with close session button and profImg */}
            {
            user.map((user) => (
                <div className="navbar-container">
                    <h1 className="logo-navbar" onClick={Home}>StreamMotion</h1>
                    <div>
                        <button className="btn" onClick={SingOut}>Cerrar Sesión</button>
                        <div className={user.profIMG} onClick={Edit}/>
                    </div>
                </div>
                ))
            }

            {/* Trailer */}
            <div className="full-screen">
                <div className="full-info">
                    <div className="full-title">
                        <h1>Oppenheimer</h1><img src={playico} alt="play" className="play full"/>
                    </div>
                    <p>En tiempos de guerra, el brillante físico estadounidense Julius Robert Oppenheimer, al frente del 'Proyecto Manhattan', lidera los ensayos nucleares para construir la bomba atómica para su país.</p>
                </div>
                <ReactPlayer url={trailer1} playing="true" muted="true" loop width="100vw" height="110vh"/>
            </div>

            {/* Cards */}
            <div className="film-list">
                <div className="card">
                    <img src={esdla1} alt="esdla" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Fantasía</ul>
                            <ul>Aventuras</ul>
                            <ul>Acción</ul>
                        </li>
                    </div>
                    <h1>El Señor de los Anillos: La Comunidad del Anillo</h1>
                    <p>En la Tierra Media, el Señor Oscuro Sauron ordenó a los Elfos que forjaran los Grandes Anillos de Poder. Tres para los reyes Elfos, siete para los Señores Enanos, y nueve para los Hombres Mortales.</p>
                    <div className="info">
                        <h2 className="age">18+</h2>
                        <h2>3h 00min</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={esdla2} alt="esdla" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Fantasía</ul>
                            <ul>Aventuras</ul>
                            <ul>Acción</ul>
                        </li>
                    </div>
                    <h1>El Señor de los Anillos: Las Dos Torres</h1>
                    <p>Los hobbits Frodo y Sam descubren que Gollum les está siguiendo. La criatura les promete guiarlos hasta las puertas de Mordor si después lo dejan libre.</p>
                    <div className="info">
                        <h2 className="age">18+</h2>
                        <h2>2h 59min</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                
                <div className="card">
                    <img src={esdla3} alt="esdla" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Fantasía</ul>
                            <ul>Aventuras</ul>
                            <ul>Acción</ul>
                        </li>
                    </div>
                    <h1>El Señor de los Anillos: El Retorno del Rey</h1>
                    <p>Las fuerzas de Saruman han sido destruidas, y su fortaleza sitiada. Ha llegado el momento de decidir el destino de la Tierra Media, y, por primera vez, parece que hay una pequeña esperanza.</p>
                    <div className="info">
                        <h2 className="age">18+</h2>
                        <h2>3h 01min</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={mariposa} alt="mariposa" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Fantasía</ul>
                            <ul>Thriller</ul>
                            <ul>Drama</ul>
                        </li>
                    </div>
                    <h1>El Efecto Mariposa</h1>
                    <p>Si Supermán daba vueltas a la Tierra para ir hacia atrás en el tiempo, el guapo de Kutcher simplemente tiene que concentrarse mientras lee sus diarios.</p>
                    <div className="info">
                        <h2 className="age">12+</h2>
                        <h2>1h 53min</h2>
                        <h2 className="quality">HD</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={inside} alt="inside" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Animación</ul>
                            <ul>Fantasía</ul>
                            <ul>Comedia</ul>
                        </li>
                    </div>
                    <h1>Del Revés</h1>
                    <p>Riley es una chica que disfruta o padece toda clase de sentimientos. Aunque su vida ha estado marcada por la Alegría, también se ve afectada por otro tipo de emociones.</p>
                    <div className="info">
                        <h2 className="age kids">5+</h2>
                        <h2>1h 34min</h2>
                        <h2 className="quality">HD</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={naruto} alt="naruto" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Animación</ul>
                            <ul>SerieTV</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Naruto: Shippuden</h1>
                    <p>La historia rodea a un mayor y un poco más maduro Naruto Uzumaki y su aventura para rescatar a su amigo Sasuke Uchiha de las garras del Orochimaru.</p>
                    <div className="info">
                        <h2 className="age kids">3+</h2>
                        <h2>502 Episodios</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={evangelion} alt="evangelion" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Animación</ul>
                            <ul>SerieTV</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Neon Genesis: Evangelion</h1>
                    <p> En el año 1999, en la Antártida, ocurrió un cataclismo llamado "El Segundo Impacto", como resultado de un incidente ocasionado por unos seres conocidos como "Ángeles".</p>
                    <div className="info">
                        <h2 className="age">12+</h2>
                        <h2>26 Episodios</h2>
                        <h2 className="quality">HD</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={hp1} alt="hp1" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Aventuras</ul>
                            <ul>Infantil</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Harry Potter: La Piedra Filosofal</h1>
                    <p>El día en que cumple once años, Harry Potter se entera de que es hijo de dos destacados hechiceros, de los que ha heredado poderes mágicos.</p>
                    <div className="info">
                        <h2 className="age kids">8+</h2>
                        <h2>2h 32mins</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={hp2} alt="hp2" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Aventuras</ul>
                            <ul>Infantil</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Harry Potter: La Cámara Secreta</h1>
                    <p>Terminado el verano, Harry (Radcliffe) no ve la hora de abandonar la casa de sus odiosos tíos, pero, inesperadamente se presenta en su dormitorio Dobby, un elfo doméstico, que le anuncia que correrá un gran peligro si vuelve a Hogwarts.</p>
                    <div className="info">
                        <h2 className="age kids">8+</h2>
                        <h2>2h 34mins</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={hp3} alt="hp3" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Aventuras</ul>
                            <ul>Infantil</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Harry Potter: El Prisionero de Azkaban</h1>
                    <p>Cuando Harry Potter y sus amigos vuelven a Hogwarts para cursar su tercer año de estudios, se ven involucrados en un misterio: de la prisión para magos de Azkaban se ha fugado Sirius Black.</p>
                    <div className="info">
                        <h2 className="age kids">8+</h2>
                        <h2>2h 17mins</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={hp4} alt="hp4" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Aventuras</ul>
                            <ul>Infantil</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Harry Potter: El Cáliz de Fuego</h1>
                    <p> Una gran sorpresa obligará a Harry a enfrentarse a muchos desafíos temibles. También habrá un torneo de magia para tres escuelas, y el temido regreso de "Aquel-que-no-debe-ser-nombrado". </p>
                    <div className="info">
                        <h2 className="age kids">8+</h2>
                        <h2>2h 37mins</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={hp5} alt="hp5" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Aventuras</ul>
                            <ul>Infantil</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Harry Potter: La Orden del Fénix</h1>
                    <p>Las tediosas vacaciones en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione y presiente que algo extraño está sucediendo en Hogwarts.</p>
                    <div className="info">
                        <h2 className="age kids">8+</h2>
                        <h2>2h 18mins</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={hp6} alt="hp6" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Aventuras</ul>
                            <ul>Infantil</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Harry Potter: El Misterio del Príncipe</h1>
                    <p>Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra.</p>
                    <div className="info">
                        <h2 className="age kids">8+</h2>
                        <h2>2h 33mins</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={hp7} alt="hp7" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Aventuras</ul>
                            <ul>Infantil</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Harry Potter: La Reliquias de la Muerte. Parte 1</h1>
                    <p>Una misión casi imposible cae sobre los hombros de Harry: deberá encontrar y destruir a los últimos horrocruxes para poner fin al reinado de Lord Voldemort.</p>
                    <div className="info">
                        <h2 className="age kids">8+</h2>
                        <h2>2h 26mins</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={hp8} alt="hp8" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Aventuras</ul>
                            <ul>Infantil</ul>
                            <ul>Fantasía</ul>
                        </li>
                    </div>
                    <h1>Harry Potter: Las Reliquias de la Muerte. Parte 2</h1>
                    <p>El final ha llegado. Harry, Hermione y Ron tendrán que recuperar la espada de Gryffindor para encontrar y destruir los últimos horrocruxes.</p>
                    <div className="info">
                        <h2 className="age kids">8+</h2>
                        <h2>2h 10mins</h2>
                        <h2 className="quality">4K</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={white} alt="white" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Comedia</ul>
                            <ul>Acción</ul>
                            <ul>Thriller</ul>
                        </li>
                    </div>
                    <h1>Dos Rubias de Pelo en Pecho</h1>
                    <p>Dos ambiciosos -pero con poca fortuna- agentes del FBI (Shawn y Marlon Wayans) se hacen pasar por mujeres en el exclusivo complejo Hamptons.</p>
                    <div className="info">
                        <h2 className="age">13+</h2>
                        <h2>1h 49mins</h2>
                        <h2 className="quality">HD</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={brooklyn} alt="brooklyn" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Acción</ul>
                            <ul>SerieTV</ul>
                            <ul>Comedia</ul>
                        </li>
                    </div>
                    <h1>Brooklyn Nine-Nine</h1>
                    <p>El detective Jake Peralta (Andy Samberg) y el capitán Ray Holt (Andre Braugher) encabezan esta sitcom policíaca sobre conflictos generacionales en una comisaría de Brooklyn de Nueva York.</p>
                    <div className="info">
                        <h2 className="age">12+</h2>
                        <h2>153 Episodios</h2>
                        <h2 className="quality">HD</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={suits} alt="suits" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Drama</ul>
                            <ul>SerieTV</ul>
                            <ul>Thriller</ul>
                        </li>
                    </div>
                    <h1>Suits. La Clave del Éxito</h1>
                    <p>Michael Ross se gana la vida bordeando los límites de la legalidad.</p>
                    <div className="info">
                        <h2 className="age">12+</h2>
                        <h2>153 Episodios</h2>
                        <h2 className="quality">HD</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={exorcista} alt="exorcista" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Terror</ul>
                            <ul>Fantasía</ul>
                            <ul>Thriller</ul>
                        </li>
                    </div>
                    <h1>El Exorcista</h1>
                    <p>Regan, una niña de doce años, sufre fenómenos paranormales como la levitación o la manifestación de una fuerza sobrehumana.</p>
                    <div className="info">
                        <h2 className="age">18+</h2>
                        <h2>2h 01mins</h2>
                        <h2 className="quality">HD</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

                <div className="card">
                    <img src={mulan} alt="mulan" className="filmimg"/>
                    <div className="tags">
                        <li>
                            <ul>Animación</ul>
                            <ul>Acción</ul>
                            <ul>Comedia</ul>
                        </li>
                    </div>
                    <h1>Mulán</h1>
                    <p>Mulan, una joven china hija única de la familia Fa, en lugar de buscar novio, como sus amigas, trata por todos los medios de alistarse en el ejército imperial para evitar que su anciano padre sea llamado a filas para defender al Emperador del acoso de los Hunos.</p>
                    <div className="info">
                        <h2 className="age kids">8+</h2>
                        <h2>1h 28mins</h2>
                        <h2 className="quality">HD</h2>
                    </div>
                    <img src={playico} alt="play" className="play"/>
                </div>

            </div>

            {/* Footer Component */}
            <Footer/>

        </div>
    )
}