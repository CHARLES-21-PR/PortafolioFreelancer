import { FaCheckCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import IdiomasButton from "../componente_buttonBolean/IdiomasButton";
import TemasWOB from "../componente_buttonBolean/TemasWOB";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


function Card_comp({ onRouteClick }) {

    return (
        <div className="tarjeta">
            <FaUserCircle className="tarjeta-img" />
            <h2>FreelancerGroup <FaCheckCircle /></h2>
            <a href="#">@FreelancerGroup</a>
            <div className='redes-r'>
                    <ul>
                        <li>
                            <a href="">
                              <FaLinkedin className="redes-icon"/>
                            </a>
                            
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                              <FaGithub className="redes-icon"/>
                            </a>
                        </li>
                    </ul>
                    
                    </div>
            <div className="btnBolean">
                <IdiomasButton />
                <TemasWOB />
            </div>
            
            
            <div className="nav-card">
                <div className="navCard-1">
                    <ul>
                        <li>
                            <NavLink to="/home" onClick={onRouteClick}>
                                <FaHome /> Home
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/projects" onClick={onRouteClick}>
                                <FaProjectDiagram /> Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
// function Tarjeta2() {
//     return (
//         <div className="tarjeta">
//             <img src="/img/perfil.png" className="tarjeta-img" />
//             <h2>Romel Denis AQ </h2>
//             <p>Aprendiz de todo, maestro de nada</p>
//         </div>
//     );

// }

export default Card_comp;

/*const card_comp = ()=>{
    return(
        <div>carlos adrian HM<div>
    );
}

const App=()=>{

    return(
        <div><card_comp></card_comp></div>
    );
}

export default App;
*/