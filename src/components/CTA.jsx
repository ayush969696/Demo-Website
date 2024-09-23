import React from 'react';

const CTA = () => {
  return (
    <div className='lg:px-24 py-6 '>
    
    <div id="cta" className="w-full h-[435px] relative flex items-center justify-center overflow-hidden rounded-2xl">
      {/* Background Image with Blue Overlay */}
      <div
        className="absolute \ inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5685840/pexels-photo-5685840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      ></div>
      <div className="absolute inset-0 bg-[#0f3761] opacity-85 "></div>

      {/* Content Area */}
      <div className="relative z-10 text-center flex flex-col items-center gap-3 px-4">
        <h2 className="text-3xl lg:text-[54px] font-semibold max-w-3xl  text-white " style={{ lineHeight: 1.1}}>
          Start scaling your business with Innovar
        </h2>
        <p className="text-lg lg:text-xl text-white font-medium my-2 text-opacity-90">
          14-day free trial. No credit card required.
        </p>
        <a
          href="/html/innovar/main/page-contact"
          className="mt-4 bg-yellow-500 flex items-center gap-3 text-xl text-[#133a65] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Get a quote <i class="fa-solid fa-arrow-right-long"></i>
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
