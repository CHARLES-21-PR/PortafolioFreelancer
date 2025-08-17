import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navegation from './Components/Navegation';
import Tit_comp from './Components/componente_titulo/tit_comp';
import Card_comp from   './Components/componente_tarjeta/Card_comp';
import CardBody_comp from './Components/componente_tarjeta/CardBody_comp'
import './App.css'

function App() {
  return (
    <>
    <div className="app-container">
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
