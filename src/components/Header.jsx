// src/components/Header.jsx
import React, { useState, useContext, useEffect, useRef } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { Transition } from '@headlessui/react';
import mainLogo from '../assets/mainLogo.png';
import mainLogoLight from '../assets/mainLogo-light.png';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  
  // State to handle navbar visibility
  const [show, setShow] = useState(true);
  const prevScrollY = useRef(0);

  // Effect to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY.current && currentScrollY > 50) {
        // Scrolling down and scrolled more than 50px
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 lg:px-32 lg:pt-6 pb-4 py-3 transition-transform duration-300 ${
        darkMode ? 'bg-[#010d19]' : 'bg-white'
      } ${show ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
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
            className={`text-xl font-semibold hover:text-gray-500 transition ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            Services
          </a>
          <a
            href="#Case-Studies"
            className={`text-xl font-semibold hover:text-gray-500 transition ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            Case Studies
          </a>
          <a
            href="#Insights"
            className={`text-xl font-semibold hover:text-gray-500 transition ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            Insights
          </a>
          <a
            href="#About"
            className={`text-xl font-semibold hover:text-gray-500 transition ${
              darkMode ? 'text-white' : 'text-black'
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
              darkMode
                ? 'bg-gray-50 text-black hover:bg-gray-200'
                : 'text-white bg-[#023363] hover:bg-[#022040]'
            } transition duration-500`}
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
        className={`md:hidden fixed inset-0 z-40 ${
          darkMode ? 'bg-[#010d19]' : 'bg-white'
        }`}
      >
        <div
          className={`flex flex-col items-start p-6 space-y-6 w-3/4 h-full shadow-xl ${
            darkMode ? 'bg-[#010b14] text-white' : 'bg-white text-black'
          }`}
        >
          <div className="flex justify-between w-full">
            {/* Logo in mobile menu */}
            <img
              src={darkMode ? mainLogo : mainLogoLight}
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
            {['Home', 'Services', 'Case Studies', 'About', 'Blog', 'Pricing', 'Contact', 'Shop', 'Sign in', 'Sign up', 'Terms of use', 'Privacy Policy'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-lg font-semibold hover:text-gray-500 transition ${
                  darkMode ? 'text-white' : 'text-black'
                }`}
              >
                {item}
              </a>
            ))}
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
