import React, { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import mainLogo from "../assets/mainLogo.png";
import mainLogoLight from "../assets/mainLogo-light.png";

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={` w-full z-50 px-4 lg:px-28 lg:pt-6 pb-4 py-3 ${
        darkMode ? "bg-[#010d19]" : "bg-white"
      }`}
    >
      <div className="max-w-full mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <img
          src={darkMode ? mainLogo : mainLogoLight}
          alt="Logo"
          className="w-28 md:w-32 h-auto"
        />

        {/* Navbar for large screens */}
        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#services"
            className={`text-xl font-medium hover:text-gray-500 transition ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Services
          </a>
          <a
            href="#Case-Studies"
            className={`text-xl font-medium hover:text-gray-500 transition ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Case Studies
          </a>
          <a
            href="#Insights"
            className={`text-xl font-medium hover:text-gray-500 transition ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Insights
          </a>
          <a
            href="#About"
            className={`text-xl font-medium hover:text-gray-500 transition ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            About
          </a>
        </nav>

        {/* Get in touch & Dark Mode toggle for large screens */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#get-in-touch"
            className={`px-6 py-[14px] text-xl font-semibold rounded-xl ${
              darkMode ? "bg-gray-50  text-black " : "text-white bg-[#022B54]"
            } hover:${darkMode ? "bg-gray-200" : "bg-[#022040]"} transition duration-500`}
          >
            Get in touch
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? "" : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className={`md:hidden fixed inset-0 z-40 bg-opacity-90 ${
          darkMode ? "bg-[#010d19]" : "bg-white"
        }`} // Change background color based on dark mode
      >
        <div
          className={`flex flex-col items-start p-6 space-y-6 w-3/4 h-full shadow-xl ${
            darkMode ? "bg-[#010b14] text-white" : "bg-white text-black"
          }`}
        >
          <div className="flex justify-between w-full">
            {/* Logo in mobile menu */}
            <img
              src={darkMode ? mainLogo : mainLogoLight} // Change logo based on dark mode
              alt="Logo"
              className="w-28 h-auto"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              <FiX size={30} />
            </button>
          </div>

          {/* Mobile menu items */}
          <nav className="flex flex-col space-y-6 w-full">
            <a
              href="#home"
              className={`text-lg font-medium hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Home
            </a>
            <a
              href="#services"
              className={`text-lg font-medium hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Services
            </a>
            <a
              href="#case-studies"
              className={`text-lg font-medium hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Case Studies
            </a>
            <a
              href="#about"
              className={`text-lg font-medium hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              About
            </a>
            <a
              href="#blog"
              className={`text-lg font-medium hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Blog
            </a>
            <a
              href="#pricing"
              className={`text-lg font-medium hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className={`text-lg font-medium hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Contact
            </a>
            <a
              href="#shop"
              className={`text-lg font-medium hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Shop
            </a>
            <a
              href="#sign-in"
              className={`text-lg font-medium mt-2 hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Sign in
            </a>
            <a
              href="#sign-up"
              className={`text-lg font-medium mt-2 hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Sign up
            </a>
            <a
              href="#terms"
              className={`text-lg font-medium mt-2 hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Terms of use
            </a>
            <a
              href="#privacy"
              className={`text-lg font-medium mt-2 hover:text-gray-500 transition ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Privacy Policy
            </a>
          </nav>

          <div className="flex items-center space-x-4 w-full justify-between">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
