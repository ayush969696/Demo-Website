import React from "react";
import heroimg from '../assets/hero-00.png';
import arrow1 from '../assets/arrow1.png'; 

function HeroSection({darkMode}) {
  return (
    <section className="bg-gradient-to-r from-[#e6ebef] to-gray-50 mx-4 md:mx-[98px] my-8 md:rounded-3xl rounded-lg overflow-hidden md:h-[650px] relative">
      <div className="container mx-auto flex flex-col justify-between md:flex-row items-center relative h-full">
        {/* Left Section for Text */}
        <div className="w-full md:w-1/2 px-6 md:px-12 pt-12 md:pt-20 text-center md:text-left">
          <h1 className="text-[32px] md:text-[60px] font-bold text-gray-900 leading-tight">
            Driving Success 
            with Innovative Solutions
          </h1>
          <p className="mt-4 text-[#404144] text-[16px] md:text-[26px] font-Inter">
            Our business consulting services are rooted in a deep understanding
            of industry trends, best practices, and the latest technologies.
          </p>
          <button className={`px-6 md:px-8 mt-8 py-[12px] md:py-[18px] text-md md:text-xl font-semibold rounded-xl ${
          darkMode ? "bg-gray-50 text-black" : "text-white bg-[#023363]"
        } hover:${
          darkMode ? "bg-gray-200" : "bg-[#022040]"
        } transition duration-500`}>
            Free consultation
          </button>
        </div>

        {/* Right Section for Image */}
        <div className="w-full md:w-[55.4%] mt-6 md:mt-0">
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
