import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Navegation({ onMenuToggle, isMenuOpen }) {

  const handleMenuToggle = () => {
    onMenuToggle(!isMenuOpen);
  };
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
    {isMenuOpen ? (
      <IoClose className='menu-icon' onClick={handleMenuToggle}/>
    ) : (
      <TiThMenu className='menu-icon' onClick={handleMenuToggle}/>
    )}
    </div>
  );
}

export default Navegation;