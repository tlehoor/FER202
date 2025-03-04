// src/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'react-bootstrap';

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider > {/* Không truyền theme={theme} nữa */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};