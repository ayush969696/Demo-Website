// src/contexts/DarkModeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const DarkModeContext = createContext();

// Create Provider
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode preference in localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
