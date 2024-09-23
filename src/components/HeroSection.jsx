// src/components/HeroSection.jsx
import React, { useContext } from "react";
import heroimg from '../assets/hero-00.png';
import arrow1 from '../assets/arrow1.png'; 
import { DarkModeContext } from '../contexts/DarkModeContext';

function HeroSection() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`mx-4 md:mx-32 my-8 md:rounded-3xl rounded-lg overflow-hidden md:h-[580px] relative transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-[#010d19] to-gray-600"
          : "bg-gradient-to-r from-[#e6ebef] to-gray-50"
      }`}
    >
      <div className="container mx-auto flex flex-col justify-between md:flex-row items-center relative h-full">
        {/* Left Section for Text */}
        <div className="w-full md:w-1/2 px-6 md:px-12 pt-12 md:pt-20 text-center md:text-left">
          <h1
            className={`text-[32px] md:text-[55px] font-bold leading-tight transition-colors duration-300 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Driving Success 
            with Innovative Solutions
          </h1>
          <p
            className={`mt-4 text-[16px] md:text-[26px] font-Inter transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-[#404144]"
            }`}
          >
            Our business consulting services are rooted in a deep understanding
            of industry trends, best practices, and the latest technologies.
          </p>
          <button
            className={`px-6 md:px-8 mt-8 py-[12px] md:py-[18px] text-md md:text-xl font-semibold rounded-xl transition duration-500 ${
              darkMode
                ? "bg-gray-50 text-black hover:bg-gray-200"
                : "text-white bg-[#023363] hover:bg-[#022040]"
            }`}
          >
            Free consultation
          </button>
        </div>

        {/* Right Section for Image */}
        <div className="w-full md:w-[54.4%] mt-6 md:mt-0">
          <img
            src={heroimg}
            alt="Consultants working together"
            className="rounded-lg w-full"
          />
        </div>
        
        {/* Arrow Image hidden on small screens */}
        <img
          src={arrow1}
          alt="Decorative arrow 1"
          className="absolute left-[25%] bottom-[-8%] w-[160px] hidden lg:block"
        />
      </div>
    </section>
  );
}

export default HeroSection;
