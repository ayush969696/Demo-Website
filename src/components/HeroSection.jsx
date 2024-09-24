import React, { useContext } from "react";
import heroimg from "../assets/hero-00.png";
import arrow1 from "../assets/arrow1.png";
import { DarkModeContext } from "../contexts/DarkModeContext";

function HeroSection() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`lg:py-24 pt-20 pb-12 `}>
      <div
        className={`mx-4 lg:mx-32 my-8 lg:rounded-3xl rounded-lg overflow-hidden lg:h-[650px] relative transition-colors duration-300 ${
          darkMode
            ? "bg-gradient-to-r from-[#010d19] to-gray-600"
            : "bg-gradient-to-r from-[#e6ebef] to-gray-50"
        }`}
      >
        <div className="container mx-auto flex flex-col justify-between lg:flex-row items-center relative h-full">
          <div className="w-full lg:w-1/2 px-6 lg:px-12 pt-12 lg:pt-20 text-center lg:text-left">
            <h1
              className={`text-[32px] md:text-[46px] lg:text-[58px] font-bold leading-tight transition-colors duration-300 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Driving Success with Innovative Solutions
            </h1>
            <p
              className={`mt-4 text-[16px] lg:text-[26px] font-Inter transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-[#404144]"
              }`}
            >
              Our business consulting services are rooted in a deep
              understanding of industry trends, best practices, and the latest
              technologies.
            </p>
            <button
              className={`px-6 lg:px-8 mt-8 py-[12px] lg:py-[18px] text-lg lg:text-xl font-semibold rounded-xl transition duration-500 ${
                darkMode
                  ? "bg-gray-50 text-black hover:bg-gray-200"
                  : "text-white bg-[#023363] hover:bg-[#022040]"
              }`}
            >
              Free consultation
            </button>
          </div>

          <div className="w-full lg:w-[56.4%] mt-6 lg:mt-20">
            <img
              src={heroimg}
              alt="Consultants working together"
              className="rounded-lg w-full"
            />
          </div>

          <img
            src={arrow1}
            alt="Decorative arrow 1"
            className="absolute left-[25%] bottom-[-8%] w-[160px] hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
