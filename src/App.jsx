import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navegation from './Components/Navegation'
import Tit_comp from './Components/componente_titulo/tit_comp'
import './App.css'

function App() {
  

  return (
    <div className="app-container">
      <div className="nave">
        <Navegation/>
      </div>
      <main className="main-content">
        <Tit_comp />
      </main>
    </div>

  )
  

}

export default App
