import React, { useContext } from "react";
import aboutUs from "../assets/aboutUs.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { DarkModeContext } from '../contexts/DarkModeContext.jsx';

function AboutUs() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`w-full py-12 ${darkMode ? 'bg-[#010d19] text-white' : 'bg-transparent text-black'}`}>
      <div className="container mx-auto lg:max-w-[90%] max-w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 text-center mb-4 md:hidden">
            <span className={`text-md w-40 ${darkMode ? 'bg-gray-600 text-white' : 'bg-[#f6f6f7] text-[#101011]'} mb-4 p-2 mx-auto rounded-lg block`}>
              About Us
            </span>
            <h3 className="text-3xl font-bold mb-4 max-w-xl mx-auto">
              Globally Recruitment and Consultation
            </h3>
          </div>

          <div className="col-span-12 md:hidden mb-8">
            <div className="panel relative overflow-hidden h-full">
              <img
                className="object-cover w-full h-[340px] mx-auto rounded-lg transition-transform duration-500 transform hover:scale-105"
                src={aboutUs}
                alt="About us"
              />
            </div>
          </div>

          {["01", "02", "03", "04"].map((num, index) => (
            <div key={num} className="col-span-12 md:col-span-3 mb-2 md:hidden">
              <Article
                number={num}
                icon={`fa-${index % 2 === 0 ? 'regular' : 'solid'} fa-${index === 0 ? 'address-card' : index === 1 ? 'chart-line' : index === 2 ? 'business-time' : 'people-roof'}`}
                title={index === 0 ? "Strategy Development" : index === 1 ? "Operational Improvement" : index === 2 ? "Financial Advisory" : "Change Management"}
                description={index === 0 ? "Crafting long-term goals and competitive strategies." : index === 1 ? "Streamlining processes for efficiency and productivity." : index === 2 ? "Managing budgets and financial planning effectively." : "Facilitating smooth transitions and organizational change."}
              />
            </div>
          ))}

          <div className="text-center flex mt-4 md:hidden">
            <a
              className={`block mx-auto px-5 py-3 text-lg font-semibold rounded-xl transition duration-500 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-600" : "bg-[#023363] text-white hover:bg-[#022040]"}`}
              href="#"
            >
              Get Quotes
            </a>
          </div>
        </div>

        <div className="md:grid grid-cols-12 gap-8 md:mt-6 hidden">
          <div className="col-span-12 md:col-span-3">
            <Article
              number="01"
              icon="fa-regular fa-address-card"
              title="Strategy Development"
              description="Crafting long-term goals and competitive strategies."
            />
          </div>

          <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center text-center">
            <SectionHeader />
          </div>

          <div className="col-span-12 md:col-span-3">
            <Article
              number="02"
              icon="fa-solid fa-chart-line"
              title="Operational Improvement"
              description="Streamlining processes for efficiency and productivity."
            />
          </div>

          <div className="col-span-12 md:col-span-3">
            <Article
              number="03"
              icon="fa-solid fa-business-time"
              title="Financial Advisory"
              description="Managing budgets and financial planning effectively."
            />
          </div>

          <div className="col-span-12 md:col-span-6 rounded-xl">
            <div className="panel relative overflow-hidden h-full rounded-lg">
              <img
                className="object-cover w-full md:w-[850px] h-[300px] md:h-[435px] rounded-lg transition-transform duration-500 transform hover:scale-105"
                src={aboutUs}
                alt="About us"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
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

const Article = ({ number, icon, title, description }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <article className={`about-item w-full md:w-[310px] flex flex-col px-6 py-12 md:px-8 md:py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg text-left h-auto md:h-[440px] relative`}>
      <span className="absolute top-6 md:top-16 right-6 md:right-8 text-5xl md:text-7xl font-semibold text-gray-400">
        {number}
      </span>
      <div className="flex flex-col mt-12 md:mt-auto gap-4">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white shadow-md">
          <i className={`${icon} text-xl md:text-2xl text-primary text-black`}></i>
        </div>
        <h5 className="text-2xl md:text-3xl font-semibold">{title}</h5>
        <p className="text-md md:text-xl">{description}</p>
      </div>
    </article>
  );
};

const SectionHeader = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="text-center">
      <span className={`text-md md:text-xl w-40 ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#f6f6f7] text-[#101011]'} mb-4 md:mb-8 p-2 md:p-3 mx-auto rounded-lg block`}>
        About Us
      </span>
      <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 max-w-xl md:max-w-2xl mx-auto">
        Globally Recruitment and Consultation
      </h3>
      <div className="text-center mt-8 hidden md:flex gap-6 justify-center items-center">
        <a
          href="#get-in-touch"
          className={`px-8 py-[18px] text-xl font-semibold rounded-xl ${darkMode ? "bg-gray-100 text-black" : "text-white bg-[#023363]"} hover:${darkMode ? "bg-gray-400" : "bg-[#022040]"} transition duration-500`}
        >
          Discover more
        </a>
        <a
          className="btn flex items-center btn-outline px-8 py-3 text-2xl font-semibold rounded-lg text-primary border-primary"
          href="#"
        >
          Let's talk <RiArrowRightSLine size={30} />
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
