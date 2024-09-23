import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext'; // Import the context

const CTA = () => {
  const { darkMode } = useContext(DarkModeContext); // Use context for dark mode

  return (
    <div className='lg:px-24 md:py-14 px-2 py-6'>
      <div id="cta" className={`w-full h-[435px] relative flex items-center justify-center overflow-hidden rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        {/* Background Image with Blue Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5685840/pexels-photo-5685840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
        ></div>
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-[#0f3761]'} opacity-85`}></div>

        {/* Content Area */}
        <div className="relative z-10 text-center flex flex-col items-center gap-3 px-4">
          <h2 className={`text-3xl lg:text-[54px] font-semibold max-w-3xl text-white ${darkMode ? 'text-gray-100' : 'text-white'}`} style={{ lineHeight: 1.1 }}>
            Start scaling your business with Innovar
          </h2>
          <p className={`text-lg lg:text-xl font-medium my-2 text-opacity-90 ${darkMode ? 'text-gray-300' : 'text-white'}`}>
            14-day free trial. No credit card required.
          </p>
          <a
            href="/html/innovar/main/page-contact"
            className={`mt-4 flex items-center gap-3 text-xl px-8 py-4 rounded-lg font-semibold transition ${darkMode ? 'bg-yellow-600 text-gray-900' : 'bg-yellow-500 text-[#133a65] hover:bg-yellow-600'}`}
          >
            Get a quote <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Decorative Stars */}
        <img
          src="https://unistudio.co/html/innovar/assets/images/common/gold-stare.svg"
          alt="star-icon"
          className="absolute md:top-1/4 top-[12%] left-[12%] w-8 xl:w-16"
        />
        <img
          src="https://unistudio.co/html/innovar/assets/images/common/gold-stare.svg"
          alt="star-icon"
          className="absolute bottom-1/4 right-[12%] w-6 xl:w-10"
        />
      </div>
    </div>
  );
};

export default CTA;
