import React, { useContext } from "react";
import { GoArrowRight } from "react-icons/go";
import { DarkModeContext } from '../contexts/DarkModeContext';

function Services() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`section-header panel lg:px-24 md:my-24 my-12 flex flex-col items-center sm:items-start text-center sm:text-left mx-auto sm:mx-0 gap-2 xl:gap-3 ${darkMode ? ' text-white' : 'bg-transparent text-gray-900'}`}>
      <span className={`text-xl text-center w-40 mb-5 p-3 rounded-lg block ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#f6f6f7] text-[#101011]'}`}>
        Services
      </span>
      <h3
        className={`text-3xl sm:text-3xl xl:text-[52px] font-bold m-0 px-4 md:px-0 ${darkMode ? 'text-white' : 'text-black'}`}
        style={{ lineHeight: "1.2" }}
      >
        Dive Deep Into Our Expertise <br className="hidden sm:block" />
        Explore All Our Services
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-4 my-6 ">
        <div className={`px-8 py-2 rounded-lg text-start ${darkMode ? 'bg-[#023363]' : 'bg-[#023363]'} hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat`}>
          <i className={`fa-brands fa-creative-commons-nd text-4xl bg-[#ffd700] mt-5 p-4 mb-4 rounded-lg shadow-xl ${darkMode ? 'text-[#1a3363]' : 'text-[#1a3363]'}`}></i>
          <h3 className="text-[26px] md:text-[32px] font-semibold my-2 md:my-4 text-white">
            Staffing Solution
          </h3>
          <p className="text-[16px] md:text-[21px] mb-4 md:mb-8 text-white leading-[1.5]">
            Empowering your team dynamics with precision talent matching. Our staffing solutions ensure the right fit.
          </p>
          <i className={`uil uil-arrow-up-right text-4xl text-white`}></i>
        </div>

        <div className={`px-8 py-6 rounded-lg text-start ${darkMode ? 'bg-gray-800 text-white hover:bg-[#023363]' : 'bg-[#f6f6f7] hover:bg-[#023363]'} text-black hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat`}>
          <i className={`fa-solid fa-rocket text-4xl bg-[#ffd700] mt-5 p-4 mb-4 rounded-lg shadow-xl ${darkMode ? 'text-[#1a3363]' : 'text-[#1a3363]'}`}></i>
          <h3 className="text-[26px] md:text-[32px] font-semibold my-2 md:my-4 ">
            Strategic Planning
          </h3>
          <p className="text-[16px] md:text-[21px] mb-4 md:mb-8 leading-[1.5]">
            Shaping the future with meticulous foresight. Our strategic planning paves the way for decisive action.
          </p>
          <i className={`uil uil-arrow-up-right text-4xl ${darkMode ? 'text-white' : 'text-black'}`}></i>
        </div>

        <div className={`px-8 py-6 rounded-lg text-start ${darkMode ? 'bg-gray-800 text-white hover:bg-[#023363]' : 'bg-[#f6f6f7] hover:bg-[#023363]'} text-black hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat`}>
          <i className={`fa-solid fa-cubes text-4xl bg-[#ffd700] mt-5 p-4 mb-4 rounded-lg shadow-xl ${darkMode ? 'text-[#1a3363]' : 'text-[#1a3363]'}`}></i>
          <h3 className="text-[26px] md:text-[32px] font-semibold my-2 md:my-4 ">
            HR Outsourcing
          </h3>
          <p className="text-[16px] md:text-[21px] mb-4 md:mb-8 leading-[1.5]">
            Optimizing HR processes while you focus on core business. Trust our HR outsource for streamlined operations.
          </p>
          <i className={`uil uil-arrow-up-right text-4xl`}></i>
        </div>

        <div className={`px-8 py-6 rounded-lg text-start ${darkMode ? 'bg-gray-800 text-white hover:bg-[#023363]' : 'bg-[#f6f6f7] hover:bg-[#023363]'} text-black hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat`}>
          <i className={`fa-regular fa-gem text-4xl bg-[#ffd700] mt-5 p-4 mb-4 rounded-lg shadow-xl ${darkMode ? 'text-[#1a3363]' : 'text-[#1a3363]'}`}></i>
          <h3 className="text-[26px] md:text-[32px] font-semibold my-2 md:my-4 ">
            Talent Acquisition
          </h3>
          <p className="text-[16px] md:text-[21px] mb-4 md:mb-8 leading-[1.5]">
            Express delivery in service effective logistics solution for delivery of small cargo.
          </p>
          <i className={`uil uil-arrow-up-right text-4xl`}></i>
        </div>

        <div className={`px-8 py-6 rounded-lg text-start ${darkMode ? 'bg-gray-800 text-white hover:bg-[#023363]' : 'bg-[#f6f6f7] hover:bg-[#023363]'} text-black hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat`}>
          <i className={`fa-regular fa-address-card text-4xl bg-[#ffd700] mt-5 p-4 mb-4 rounded-lg shadow-xl ${darkMode ? 'text-[#1a3363]' : 'text-[#1a3363]'}`}></i>
          <h3 className="text-[26px] md:text-[32px] font-semibold my-2 md:my-4 ">
            HR Consulting
          </h3>
          <p className="text-[16px] md:text-[21px] mb-4 md:mb-8 leading-[1.5]">
            Connecting you with the industry’s finest. Our talent acquisition strategies prioritize the perfect fit.
          </p>
          <i className={`uil uil-arrow-up-right text-4xl`}></i>
        </div>

        <div className={`px-8 py-6 rounded-lg text-start ${darkMode ? 'bg-gray-800 text-white hover:bg-[#023363]' : 'bg-[#f6f6f7] hover:bg-[#023363]'} text-black hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat`}>
          <i className={`fa-solid fa-layer-group text-4xl bg-[#ffd700] mt-5 p-4 mb-4 rounded-lg shadow-xl ${darkMode ? 'text-[#1a3363]' : 'text-[#1a3363]'}`}></i>
          <h3 className="text-[26px] md:text-[32px] font-semibold my-2 md:my-4 ">
            Improving Resource
          </h3>
          <p className="text-[16px] md:text-[21px] mb-4 md:mb-8 leading-[1.5]">
            Empowering your team dynamics with precision talent matching. Our staffing solutions ensure the right fit.
          </p>
          <i className={`uil uil-arrow-up-right text-4xl`}></i>
        </div>
      </div>

      <div className={`px-4 py-8 cursor-pointer group ${darkMode ? 'text-white' : 'text-[#02337c]'}`}>
        <h1 className="flex items-center gap-4 text-2xl font-Inter font-medium relative pb-1.5 overflow-hidden">
          View all services
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            <GoArrowRight size={26} />
          </span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent border border-gray-200 group-hover:bg-black">
            <span className="absolute inset-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full"></span>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Services;
