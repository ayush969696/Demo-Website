// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import mainLogo from "../assets/mainLogo.png";
import mainLogoLight from "../assets/mainLogo-light.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 md:px-24 px-2 md:py-12 py-8">
      <div className="mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
          {/* Logo and Social Icons */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href="#" className="flex justify-center lg:justify-start">
              {/* Logo SVG */}
              <img src={mainLogoLight} alt="Logo" className="w-44" />
            </a>
            <p className="py-8 text-xl text-gray-900 font-medium lg:max-w-lg text-center lg:text-left">
              A business consulting website typically offers a range of services
              to help clients improve e their businesses.
            </p>
            {/* Social Icons */}
            <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300"
              >
                <FaFacebookF className="text-black " size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300"
              >
                <FaTwitter className="text-black " size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300"
              >
                <FaInstagram className="text-black" size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          {/* Pagedone Links */}
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-2xl text-gray-900 font-semibold font-Montserrat mb-7">
              Main pages
            </h4>
            <ul className="text-lg font-semibold font-Inter  transition-all duration-500">
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Products Links */}
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-2xl text-gray-900 font-semibold mb-7">
              Shop pages
            </h4>
            <ul className="text-lg font-semibold font-Inter transition-all duration-500">
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Shop
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  With sidebar
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Product detail
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Cart
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Checkout
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Order confirmation
                </a>
              </li>
            </ul>
          </div>
          {/* Resources Links */}
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-2xl text-gray-900 font-semibold mb-7">
              Office
            </h4>
            <ul className="text-lg font-semibold transition-all duration-500">
              <li className="mb-4 flex items-center gap-2">
              <i class="fa-solid fa-location-dot"></i>

                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  116 Royal ln, London
                </a>
              </li>
              <li className="mb-4 flex items-center gap-2">
              <i class="fa-regular fa-envelope "></i>

                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Innovar@business.com
                </a>
              </li>
              <li className="mb-4 flex items-center gap-2">
              <i class="fa-solid fa-phone"></i>

                <a
                  href="javascript:;"
                  className="text-gray-800 hover:text-gray-900"
                >
                  +123-234-324-917
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-lg font-medium text-gray-800">
              © 2024{" "}
              <a href="https://pagedone.io/" className="text-blue-800">
                numx
              </a>{" "}
              All Rights Reserved.
            </span>
            <ul className="flex items-center gap-4 font-medium mt-4 lg:mt-0">
              <li>
                <a
                  href="javascript:;"
                  className="text-lg text-gray-800 hover:text-gray-900"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg text-gray-800 hover:text-gray-900"
                >
                  Privacy notice
                </a>
              </li>
              <li>
                <select className="text-lg p-2 bg-white border-l">
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
