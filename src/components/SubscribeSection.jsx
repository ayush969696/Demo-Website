import React from 'react';
import { FiMail } from 'react-icons/fi';

const SubscribeSection = () => {
  return (
    <div className="container max-w-2xl mx-auto">
      <div className="relative rounded px-3 py-4 sm:p-6 lg:p-8 xl:p-9 bg-blue-100">
        {/* Decorative Images */}
        <img
          className="absolute top-0 left-0 w-32 xl:w-auto hidden lg:block"
          src="https://unistudio.co/html/innovar/assets/images/common/circles.svg"
          alt="Decorative Circles"
        />
        <img
          className="absolute bottom-0 right-0 w-32 xl:w-auto hidden lg:block"
          src="https://unistudio.co/html/innovar/assets/images/common/san.svg"
          alt="Decorative San"
        />
        <img
          className="absolute bottom-0 right-0 h-full pt-1 mr-8 xl:mr-9 pr-4 hidden lg:block"
          src="https://unistudio.co/html/innovar/assets/images/common/cta.png"
          alt="Hero Image"
        />

        {/* Subscription Content */}
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 lg:w-2/3 text-center lg:text-left lg:ml-2">
          {/* Heading Section */}
          <div className="flex flex-col gap-1 sm:gap-2 xl:gap-3">
            <h3 className="text-2xl sm:text-3xl m-0">
              Subscribe to our mailing <br className="hidden sm:block" />
              list &amp; stay up to date
            </h3>
            <p className="text-base sm:text-lg">
              A business consulting website typically offers a range of <br className="hidden sm:block" />
              services to help clients improve their businesses
            </p>
          </div>

          {/* Subscription Form */}
          <form className="flex flex-col sm:flex-row gap-1 sm:gap-1 sm:max-w-[450px] m-auto lg:m-0">
            {/* Email Input */}
            <div className="relative inline-block w-full sm:w-auto">
              <input
                type="email"
                className="block rounded-md h-12 w-full bg-white pl-10"
                placeholder="Your email.."
                required
                data-fdprocessedid="39kjcj"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <FiMail />
              </span>
            </div>

            {/* Subscribe Button */}
            <div className="w-full sm:w-auto">
              <a
                href="/html/innovar/main/sign-up"
                className="bg-blue-500 hover:bg-blue-600 rounded-md h-12 w-full lg:min-w-[150px] text-white flex items-center justify-center"
                data-uc-cursor="md bg-white opacity-10"
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
