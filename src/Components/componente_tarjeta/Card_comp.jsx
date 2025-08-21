import { FaCheckCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import IdiomasButton from "../componente_buttonBolean/IdiomasButton";
import TemasWOB from "../componente_buttonBolean/TemasWOB";


function Card_comp() {

    return (
        <div className="tarjeta">
            <FaUserCircle className="tarjeta-img" />
            <h2>FreelancerGroup <FaCheckCircle /></h2>
            <a href="#">@FreelancerGroup</a>
            <div className="btnBolean">
                <IdiomasButton />
                <TemasWOB />
            </div>
            
            
            <div className="nav-card">
                <div className="navCard-1">
                    <ul>
                        <li>
                            <NavLink to="/home">
                                <FaHome /> Home
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/projects">
                                <FaProjectDiagram /> Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}


export default Card_comp;