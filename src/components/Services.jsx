import React from "react";

function Services() {
  return (
    <div className="section-header panel lg:px-24 my-24 flex flex-col items-center sm:items-start text-center sm:text-left mx-auto sm:mx-0 gap-2 xl:gap-3">
      <span className="text-xl text-center w-40 bg-[#f6f6f7] mb-5 p-3 rounded-lg block text-[#101011]">
        Services
      </span>
      <h3
        className="text-3xl sm:text-3xl xl:text-[52px]  font-bold m-0] px-4 md:px-0"
        style={{ lineHeight: "1.2" }}
      >
        Dive Deep Into Our Expertise <br className="hidden sm:block" />
        Explore All Our Services
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-4 my-6 ">
        <div className="px-8 py-8 rounded-lg text-start  bg-[#023363] hover:translate-y-[-10px] cursor-pointer transition-transform duration-300 ease-in-out font-Inter">
          <i class="fa-brands fa-creative-commons-nd text-4xl bg-[#ffd700] p-4 mb-4 rounded-lg shadow-xl text-[#1a3363]"></i>
          <h3 className="text-[26px] md:text-[34px] font-semibold my-2 md:my-4 text-white">
            Staffing Solution
          </h3>
          <p className="text-[16px] md:text-[24px] mb-4 md:mb-8 text-white leading-[1.5]">
            Empowering your team dynamics with precision talent matching. Our
            staffing solutions ensure the right fit.
          </p>
          <i class="uil uil-arrow-up-right text-4xl text-white "></i>
        </div>

        <div className="px-8 py-8 rounded-lg text-start bg-[#f6f6f7] hover:bg-[#023363] text-black hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat">
          <i class="fa-solid fa-rocket text-4xl bg-[#ffd700] p-4 mb-4 rounded-lg shadow-xl text-[#1a3363]"></i>

          <h3 className="text-[26px] md:text-[34px] font-semibold my-2 md:my-4 ">
            Strategic Planning
          </h3>
          <p className="text-[16px] md:text-[24px] mb-4 md:mb-8 leading-[1.5]">
            Shaping the future with meticulous foresight. Our strategic planning
            paves the way for decisive action.
          </p>
          <i class="uil uil-arrow-up-right text-4xl"></i>
        </div>

        <div className="px-8 py-8 rounded-lg text-start bg-[#f6f6f7] text-black hover:bg-[#023363] hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat">
        <i class="fa-solid fa-cubes text-4xl bg-[#ffd700] p-4 mb-4 rounded-lg shadow-xl text-[#1a3363]"></i>
          <h3 className="text-[26px] md:text-[34px] font-semibold my-2 md:my-4 ">
            Hr Outsourcing
          </h3>
          <p className="text-[16px] md:text-[24px] mb-4 md:mb-8  leading-[1.5]">
          Optimizing HR processes while you focus on core business. Trust our HR outsource for streamlined operations.
          </p>
          <i class="uil uil-arrow-up-right text-4xl  "></i>
        </div>

        <div className="px-8 py-8 rounded-lg text-start bg-[#f6f6f7] text-black hover:bg-[#023363] hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat">
          <i class="fa-regular fa-gem text-4xl bg-[#ffd700] p-4 mb-4 rounded-lg shadow-xl text-[#1a3363]"></i>
          <h3 className="text-[26px] md:text-[34px] font-semibold my-2 md:my-4 ">
           Talent Acquisition
          </h3>
          <p className="text-[16px] md:text-[24px] mb-4 md:mb-8  leading-[1.5]">
          Express delivery inno service effective logistics solution for
            delivery of small cargo.
          </p>
          <i class="uil uil-arrow-up-right text-4xl  "></i>
        </div>

        <div className="px-8 py-8 rounded-lg text-start bg-[#f6f6f7] text-black hover:bg-[#023363] hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat">
          <i class="fa-regular fa-address-card text-4xl bg-[#ffd700] p-4 mb-4 rounded-lg shadow-xl text-[#1a3363]"></i>
          <h3 className="text-[26px] md:text-[34px] font-semibold my-2 md:my-4 ">
          HR Consulting
          </h3>
          <p className="text-[16px] md:text-[24px] mb-4 md:mb-8  leading-[1.5]">
          Connecting you with the industry’s finest. Our talent acquisition
            strategies prioritize the perfect fit.
          </p>
          <i class="uil uil-arrow-up-right text-4xl  "></i>
        </div>

        <div className="px-8 py-8 rounded-lg text-start bg-[#f6f6f7] text-black hover:bg-[#023363] hover:text-white hover:translate-y-[-10px] cursor-pointer transition duration-300 ease-in-out font-Montserrat">
          <i class="fa-solid fa-layer-group text-4xl bg-[#ffd700] p-4 mb-4 rounded-lg shadow-xl text-[#1a3363]"></i>
          <h3 className="text-[26px] md:text-[34px] font-semibold my-2 md:my-4 ">
         Improving Resource
          </h3>
          <p className="text-[16px] md:text-[24px] mb-4 md:mb-8  leading-[1.5]">
          Empowering your team dynamics with precision talent matching. Our
            staffing solutions ensure the right fit.
          </p>
          <i class="uil uil-arrow-up-right text-4xl  "></i>
        </div>
      </div>
    </div>
  );
}

export default Services;
