// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Set to true for dark mode by default

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors duration-300 font-Poppins">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
