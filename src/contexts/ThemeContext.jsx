import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const setTheme = (theme) => {
    setIsDarkMode(theme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      setTheme,
      currentTheme: isDarkMode ? 'dark' : 'white'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
