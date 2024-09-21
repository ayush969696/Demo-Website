import React from "react";
import aboutUs from "../assets/aboutUs.jpg";
import { RiArrowRightSLine } from "react-icons/ri";

function AboutUs({ darkMode }) {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto max-w-[90%] px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* First Row: 01 Card, About Us, 02 Card */}
          <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
            <Article
              number="01"
              icon="fa-regular fa-address-card"
              title="Strategy Development"
              description="Crafting long-term goals and competitive strategies."
            />
          </div>

          {/* About Us Section */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center text-center mb-8 md:mb-0">
            <SectionHeader darkMode={darkMode} />
          </div>

          {/* 02 Card */}
          <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
            <Article
              number="02"
              icon="fa-solid fa-chart-line"
              title="Operational Improvement"
              description="Streamlining processes for efficiency and productivity."
            />
          </div>
        </div>

        {/* Second Row: 03 Card, Image, 04 Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
          {/* 03 Card */}
          <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
            <Article
              number="03"
              icon="fa-solid fa-business-time"
              title="Financial Advisory"
              description="Managing budgets and financial planning effectively."
            />
          </div>

          {/* Image */}
          <div className="col-span-12 md:col-span-6 mb-8 md:mb-0">
            <div className="panel relative overflow-hidden h-full">
              <img
                className="object-cover w-full md:w-[850px] h-[300px] md:h-[448px] mx-auto rounded-xl transition-transform duration-500 transform hover:scale-105"
                src={aboutUs}
                alt="About us"
              />
            </div>
          </div>

          {/* 04 Card */}
          <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
            <Article
              number="04"
              icon="fa-solid fa-people-roof"
              title="Change Management"
              description="Facilitating smooth transitions and organizational change."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Article = ({ number, icon, title, description }) => (
  <article className="about-item w-full md:w-[350px] flex flex-col px-6 py-12 md:px-8 md:py-16 bg-gray-100 rounded-lg text-left h-auto md:h-[440px] relative">
    <span className="absolute top-12 md:top-16 right-6 md:right-8 text-5xl md:text-7xl font-semibold text-gray-400">
      {number}
    </span>
    <div className="flex flex-col mt-auto gap-4">
      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white shadow-md">
        <i className={`${icon} text-xl md:text-2xl text-primary`}></i>
      </div>
      <h5 className="text-2xl md:text-3xl font-semibold">{title}</h5>
      <p className="text-md md:text-xl text-black">{description}</p>
    </div>
  </article>
); 

const SectionHeader = ({ darkMode }) => (
  <div className="text-center">
    <span className="text-md md:text-xl w-40 bg-[#f6f6f7] mb-4 md:mb-8 p-2 md:p-3 mx-auto rounded-lg block text-[#101011]">
      About Us
    </span>
    <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 max-w-xl md:max-w-2xl mx-auto">
      Globally Recruitment and Consultation
    </h3>
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mt-4 md:mt-8">
      <a
        href="#get-in-touch"
        className={`px-6 md:px-8 py-[14px] md:py-[18px] text-lg md:text-xl font-semibold rounded-xl ${
          darkMode ? "bg-gray-50 text-black" : "text-white bg-[#023363]"
        } hover:${
          darkMode ? "bg-gray-200" : "bg-[#022040]"
        } transition duration-500`}
      >
        Discover more
      </a>
      <a
        className="btn flex items-center btn-outline px-6 md:px-8 py-3 text-lg md:text-2xl font-semibold rounded-lg text-primary border-primary"
        href="#"
      >
        Let's talk <RiArrowRightSLine size={30} />
      </a>
    </div>
  </div>
);

export default AboutUs;
