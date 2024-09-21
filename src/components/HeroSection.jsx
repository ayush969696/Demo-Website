import React from "react";
import heroimg from '../assets/hero-00.png';
import arrow1 from '../assets/arrow1.png'; 

function HeroSection({darkMode}) {
  return (
    <section className="bg-gradient-to-r from-[#e6ebef] to-gray-50 lg:mx-[98px] my-8 rounded-3xl overflow-hidden h-[650px] relative">
      <div className="container mx-auto flex flex-col justify-between md:flex-row items-center">
        <div className="w-full md:w-1/2 px-12 pt-20">
          <h1 className="text-[60px] font-bold text-gray-900 leading-tight">
            Driving Success 
            with Innovative Solutions
          </h1>
          <p className="mt-4 text-[#404144] text-[26px] font-Inter">
            Our business consulting services are rooted in a deep understanding
            of industry trends, best practices, and the latest technologies.
          </p>
          <button  className={`px-8 mt-12 py-[18px] text-xl font-semibold rounded-xl ${
          darkMode ? "bg-gray-50  text-black " : "text-white bg-[#023363]"
        } hover:${
          darkMode ? "bg-gray-200" : "bg-[#022040]"
        } transition duration-500`}>
            Free consultation
          </button>
        </div>

        <div className="w-full md:w-[55.4%] relative">
          <img
            src={heroimg}
            alt="Consultants working together"
            className="rounded-lg"
          />
        </div>
        
      <img
        src={arrow1}
        alt="Decorative arrow 1"
        className="absolute left-[20%] bottom-[-8%] w-[160px]"  
      />
      </div>

    </section>
  );
}

export default HeroSection;