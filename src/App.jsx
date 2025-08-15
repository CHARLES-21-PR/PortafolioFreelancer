import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navegation from './Components/Navegation';
import Tit_comp from './Components/componente_titulo/Tit_comp';
import Card_comp from   './Components/componente_tarjeta/Card_comp';
import Tarjeta2 from   './Components/componente_tarjeta/Card_comp';
import './App.css'

function App() {
  return (
    <>
    <Navegation/>
    <Tit_comp />
    <Card_comp/>
    <Tarjeta2/>
    </>
  );
}

export default App
