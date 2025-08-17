import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navegation from './Components/Navegation'
import Tit_comp from './Components/componente_titulo/TituloComponent'
import Card_comp from './Components/componente_tarjeta/Card_comp'
import CardBody_comp from './Components/componente_tarjeta/CardBody_comp'
import { useTheme } from './contexts/ThemeContext'
import './App.css'

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navegation/>
      <div className="main-content">
        <Tit_comp />
        <div className="cards">
          <Card_comp/>
          <CardBody_comp/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App
