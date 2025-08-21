import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const NavCard = ({children}) => {
    return (
        <div className="nav-card">
            <div className="navCard-1">
                <ul>
                    <li><NavLink to="/home">Home</NavLink>
                    <FaHome />
                    </li>
                    
                </ul>
                <ul>
                    <li><NavLink to="/projects">Proyects</NavLink></li>
                </ul>
            </div>
            <div className="navCard-2">
                {children}
            </div>
        </div>
    );
}
export default NavCard;