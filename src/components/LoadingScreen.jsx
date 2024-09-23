// components/LoadingScreen.jsx
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#010d19]">
      <FaSpinner className="animate-spin text-4xl text-white" size={60}/>
    </div>
  );
};

export default LoadingScreen;
