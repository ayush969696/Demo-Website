import React from 'react';
import aboutUs from "../assets/aboutUs.jpg";

function AboutUs() {
  return (
    <section className="w-full py-12 font-Montserrat">
      <div className="container mx-auto max-w-[90%]">
        <div className="grid grid-cols-12 gap-12">
          {/* First Row: 01 Card, About Us, 02 Card */}
          <div className="col-span-4">
            <Article
              number="01"
              icon="unicon-download-study"
              title="Strategy Development"
              description="Crafting long-term goals and competitive strategies."
            />
          </div>

          {/* About Us Section */}
          <div className="col-span-4 flex flex-col justify-center items-center text-center">
            <SectionHeader />
          </div>

          {/* 02 Card */}
          <div className="col-span-4">
            <Article
              number="02"
              icon="unicon-certificate"
              title="Operational Improvement"
              description="Streamlining processes for efficiency and productivity."
            />
          </div>

          {/* Second Row: 03 Card, Image, 04 Card */}
          <div className="col-span-12 grid grid-cols-12 gap-12 mt-12">
            {/* 03 Card */}
            <div className="col-span-4">
              <Article
                number="03"
                icon="unicon-policy"
                title="Financial Advisory"
                description="Managing budgets and financial planning effectively."
              />
            </div>

            {/* Image */}
            <div className="col-span-4">
              <div className="panel relative rounded overflow-hidden h-full">
                <img
                  className="object-cover w-[750px] h-[500px] transition-transform duration-500 transform hover:scale-105"
                  src={aboutUs}
                  alt="About us"
                />
              </div>
            </div>

            {/* 04 Card */}
            <div className="col-span-4">
              <Article
                number="04"
                icon="unicon-collaborate"
                title="Change Management"
                description="Facilitating smooth transitions and organizational change."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Article = ({ number, icon, title, description }) => (
  <article className="about-item flex flex-col p-8 bg-[#f6f6f7] rounded-lg text-left h-full">
    <span className="text-6xl text-gray-300">{number}</span>
    <div className="flex flex-col gap-6">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-md">
        <i className={`icon-${icon} text-3xl text-primary`}></i>
      </div>
      <h5 className="text-2xl font-semibold">{title}</h5>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  </article>
);

const SectionHeader = () => (
  <div className="text-center">
    <span className="text-xl w-40 bg-[#f6f6f7] mb-6 p-3 mx-auto rounded-lg block text-[#101011]">About Us</span>
    <h3 className="text-5xl font-bold mb-6 max-w-xl mx-auto">
      Globally Recruitment and Consultation
    </h3>
    <div className="flex gap-6 justify-center mt-4">
      <a
        className="btn btn-primary px-8 py-3 rounded-lg text-white"
        href="/html/innovar/main/page-about"
      >
        Discover more
      </a>
      <a
        className="btn btn-outline px-8 py-3 rounded-lg text-primary border-primary"
        href="/html/innovar/main/page-contact"
      >
        Let's talk <i className="icon-chevron-right ml-2"></i>
      </a>
    </div>
  </div>
);

export default AboutUs;
