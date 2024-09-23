import React, { useContext } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import mainLogo from "../assets/mainLogo.png";
import mainLogoLight from "../assets/mainLogo-light.png";
import { DarkModeContext } from '../contexts/DarkModeContext'; 

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext); 

  return (
    <footer className={`w-full md:px-24 px-2 md:py-12 py-2`}>
      <div className="mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href="#" className="flex md:justify-center lg:justify-start">
              <img src={darkMode ? mainLogo : mainLogoLight} alt="Logo" className="w-44" />
            </a>
            <p className={`py-8 md:text-xl text-md font-medium lg:max-w-lg  lg:text-left ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              A business consulting website typically offers a range of services to help clients improve their businesses.
            </p>
            <div className="flex mt-2 space-x-4 md:justify-center lg:justify-start sm:mt-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
              >
                <FaFacebookF className={`${darkMode ? 'text-white' : 'text-black'}`} size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
              >
                <FaTwitter className={`${darkMode ? 'text-white' : 'text-black'}`} size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex justify-center items-center hover:bg-gray-200 transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
              >
                <FaInstagram className={`${darkMode ? 'text-white' : 'text-black'}`} size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          {/* Main pages */}
          <div className="lg:mx-auto ">
            <h4 className={`text-2xl font-semibold font-Montserrat mb-7 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Main pages
            </h4>
            <ul className={`text-sm md:text-lg font-semibold font-Inter transition-all duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              {["About", "Services", "Pricing", "Blog", "Contact"].map((page, index) => (
                <li key={index} className="mb-4">
                  <a
                    href="javascript:;"
                    className={`hover:${darkMode ? 'text-gray-200' : 'text-gray-900'}`}
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Shop pages */}
          <div className="lg:mx-auto ">
            <h4 className={`text-2xl font-semibold mb-7 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Shop pages
            </h4>
            <ul className={`text-sm md:text-lg font-semibold font-Inter transition-all duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              {["Shop", "With sidebar", "Product detail", "Cart", "Checkout", "Order confirmation"].map((page, index) => (
                <li key={index} className="mb-4">
                  <a
                    href="javascript:;"
                    className={`hover:${darkMode ? 'text-gray-200' : 'text-gray-900'}`}
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Office */}
          <div className="lg:mx-auto">
            <h4 className={`text-2xl font-semibold mb-7 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Office
            </h4>
            <ul className={`text-sm md:text-lg font-semibold transition-all duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              {[
                { icon: "fa-location-dot", text: "116 Royal ln, London" },
                { icon: "fa-regular fa-envelope", text: "Innovar@business.com" },
                { icon: "fa-solid fa-phone", text: "+123-234-324-917" },
              ].map((item, index) => (
                <li key={index} className="mb-4 flex items-center gap-3">
                  <i className={`fa-solid ${item.icon}`}></i>
                  <a
                    href="javascript:;"
                    className={`hover:${darkMode ? 'text-gray-200' : 'text-gray-900'}`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className={`text-sm md:text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              © 2024{" "}
              <a href="#" className={`text-blue-800`}>
                numx
              </a>{" "}
              All Rights Reserved.
            </span>
            <ul className="flex items-center gap-4 font-medium mt-4 lg:mt-0">
              <li>
                <a
                  href="javascript:;"
                  className={`text-sm md:text-lg hover:${darkMode ? 'text-gray-200' : 'text-gray-900'}`}
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className={`text-sm md:text-lg hover:${darkMode ? 'text-gray-200' : 'text-gray-900'}`}
                >
                  Privacy notice
                </a>
              </li>
              <li>
                <select className={`text-sm md:text-lg p-2 ${darkMode ? 'bg-[#010d19] text-gray-200 ' : 'bg-white border-gray-300'}`}>
                  <option value="en">English</option>
                  <option value="ur">العربية</option>
                  <option value="jp">中文</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
