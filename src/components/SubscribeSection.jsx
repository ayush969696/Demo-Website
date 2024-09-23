import React, { useContext } from 'react';
import { FiMail } from 'react-icons/fi';
import { DarkModeContext } from '../contexts/DarkModeContext';

const SubscribeSection = () => {
  const { darkMode } = useContext(DarkModeContext); 

  return (
    <div className={`container max-w-full mx-auto px-4 sm:px-4 lg:px-24 py-10 `}>
      <div className={`relative rounded px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-[#f2f5f7]'}`}>
        {/* Decorative Images */}
        <img
          className="absolute top-0 left-0 w-36 xl:w-48 hidden lg:block"
          src="https://unistudio.co/html/innovar/assets/images/common/circles.svg"
          alt="Decorative Circles"
        />
        <img
          className="absolute bottom-0 right-0 w-32 xl:w-auto hidden lg:block"
          src="https://unistudio.co/html/innovar/assets/images/common/san.svg"
          alt="Decorative San"
        />
        <img
          className="absolute bottom-0 right-0 lg:right-28 lg:bottom-0 h-auto max-w-[200px] lg:max-w-[500px] hidden lg:block"
          src="https://unistudio.co/html/innovar/assets/images/common/cta.png"
          alt="Hero Image"
        />

        {/* Subscription Content */}
        <div className={`flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8 lg:w-2/3 text-center lg:h-[350px] lg:text-left lg:ml-14 ${darkMode ? 'text-white' : 'text-black'}`}>
          {/* Heading Section */}
          <div className="flex flex-col gap-2 sm:gap-4">
            <h3 className={`text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              Subscribe to our mailing <br className="hidden sm:block" />
              list &amp; stay up to date
            </h3>
            <p className={`text-lg lg:text-lg font-Inter px-2 my-4 md:my-0 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              A business consulting website typically offers a range of <br className="hidden sm:block" />
              services to help clients improve their businesses
            </p>
          </div>

          {/* Subscription Form */}
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:max-w-[450px] lg:mx-0">
            {/* Email Input */}
            <div className="relative inline-block w-full">
              <input
                type="email"
                className={`block rounded-lg h-12 w-full text-black border border-gray-400 pl-12 focus:outline-none focus:shadow-2xl focus:ring-2 focus:ring-[#023363] focus:border-transparent`}
                placeholder="Your email.."
                required
              />
              <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <FiMail size={20} />
              </span>
            </div>

            {/* Subscribe Button */}
            <div className="md:w-32 w-full">
              <a
                href="/html/innovar/main/sign-up"
                className="bg-[#023363] hover:bg-[#02274c] transition duration-200 ease-in-out text-lg font-medium rounded-lg h-12 w-full lg:min-w-[150px] text-white flex items-center justify-center"
              >
                <span>Subscribe</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
