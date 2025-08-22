import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Navegation() {
  return (
    <div className="nav">
      <h1>GrupoFreelancer</h1>
      <div className='nav-1'>
        <ul>
            <li>
                <a href="">LinkedIn
                  <FaLinkedin />
                </a>
                
            </li>
        </ul>
        <ul>
            <li>
                <a href="">Github
                  <FaGithub />
                </a>
            </li>
        </ul>
        
        </div>
    </div>
  );
}

export default Navegation;