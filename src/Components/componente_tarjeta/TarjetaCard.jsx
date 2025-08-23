import { FaCheckCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom'
import IdiomasButton from "../componente_buttonBolean/IdiomasButton";
import TemasWOB from "../componente_buttonBolean/TemasWOB";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


function TarjetaCard({ onRouteClick }) {
    const location = useLocation();
    const isHome = location.pathname === '/' || location.pathname === '/home';

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
                            <NavLink 
                                to="/" 
                                onClick={onRouteClick} 
                                className={isHome ? 'active' : ''}
                                end
                            >
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


export default TarjetaCard;

