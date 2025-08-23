import Navegation from './Components/Navegation.jsx'
import { useState } from 'react'
import TarjetaCard from './Components/componente_tarjeta/TarjetaCard.jsx'
import { useTheme } from './contexts/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/componente_tarjeta/Routes/Home.jsx'
import Projects from './Components/componente_tarjeta/Routes/Projects.jsx'
import './App.css'

function App() {
  const { isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (menuState) => {
    setIsMenuOpen(menuState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navegation onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen}/>
        <div className="main-content">
          
          <div className="content-layout">
            <div className={`cards ${isMenuOpen ? 'mobile-open' : ''}`}>
              <TarjetaCard onRouteClick={closeMenu}/>
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
