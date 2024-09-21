import React from "react";
import heroimg from '../assets/hero-00.png';
import arrow1 from '../assets/arrow1.png'; 

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-50  m-10 rounded-3xl relative">
      <div className="container mx-auto flex flex-col justify-between md:flex-row items-center">
        <div className="w-full md:w-1/2 px-10">
          <h1 className="text-[3rem] font-bold text-gray-900 leading-tight">
            Driving Success with <br />
            Innovative Solutions
          </h1>
          <p className="mt-4 text-gray-600 text-3xl font-Inter">
            Our business consulting services are rooted in a deep understanding
            of industry trends, best practices, and the latest technologies.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#023363] text-white font-semibold rounded shadow transition">
            Free consultation
          </button>
        </div>

        <div className="w-full md:w-1/2 relative">
          <img
            src={heroimg}
            alt="Consultants working together"
            className="rounded-lg"
          />
        </div>
      </div>

      <img
        src={arrow1}
        alt="Decorative arrow 1"
        className="absolute left-[30%] bottom-[0%] w-[130px]"  
      />
    </section>
  );
}

export default HeroSection;