
import Navegation from './Components/Navegation'
import TituloComponent from './Components/componente_titulo/TituloComponent'
import Card_comp from './Components/componente_tarjeta/card_comp'
// import CardBody_comp from './Components/componente_tarjeta/CardBody_comp'
import { useTheme } from './contexts/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/componente_tarjeta/Routes/Home'
import Projects from './Components/componente_tarjeta/Routes/Projects'
import './App.css'

function App() {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navegation/>
        <div className="main-content">
          <TituloComponent />
          <div className="content-layout">
            <div className="cards">
              <Card_comp/>
            </div>
            
            
            <div className="route-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App
