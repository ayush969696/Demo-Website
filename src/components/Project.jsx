import React, { useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import "tailwindcss/tailwind.css";

const allProjects = [
  {
    name: "Dreamy vision",
    text1: "Strategy Planning",
    text2: "Consulting",
    img: "https://unistudio.co/html/innovar/assets/images/project/01.jpg",
  },
  {
    name: "Energie brand",
    text1: "Strategy Planning",
    text2: "Consulting",
    img: "https://unistudio.co/html/innovar/assets/images/project/02.jpg",
  },
  {
    name: "Bottle company",
    text1: "Strategy Planning",
    text2: "Consulting",
    img: "https://unistudio.co/html/innovar/assets/images/project/03.jpg",
  },
  {
    name: "Creative agency",
    text1: "Strategy Planning",
    text2: "Consulting",
    img: "https://unistudio.co/html/innovar/assets/images/project/04.jpg",
  },
  {
    name: "Tech Innovators",
    text1: "Strategy Planning",
    text2: "Consulting",
    img: "https://unistudio.co/html/innovar/assets/images/project/05.jpg",
  },
  {
    name: "NextGen Solutions",
    text1: "Strategy Planning",
    text2: "Consulting",
    img: "https://unistudio.co/html/innovar/assets/images/project/06.jpg",
  },
];

function Project({darkMode}) {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? allProjects.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      if (currentIndex === allProjects.length - 1) {
        scrollRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        setCurrentIndex(0);
      } else {
        scrollRef.current.scrollBy({
          left: scrollRef.current.offsetWidth,
          behavior: "smooth",
        });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  return (
    <div className="section-header panel flex flex-col w-full md:pt-6 pt-4 md:pb-20 pb-6 items-center sm:items-start text-center sm:text-left sm:mx-0 gap-2 xl:gap-3">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 md:items-end w-full lg:px-24">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl text-center w-40 bg-[#f6f6f7] mb-5 p-3 rounded-lg block text-[#101011]">
            Projects
          </span>
          <h3
            className="text-3xl sm:text-3xl xl:text-[52px] font-bold m-0 px-4 md:px-0"
            style={{ lineHeight: "1.2" }}
          >
            We specialize in the <br className="hidden sm:block" /> following
            case studies
          </h3>
        </div>
        <div className="btn flex items-center gap-3">
          <div
            onClick={handlePrev}
            className="py-5 px-6 bg-[#023363] rounded-xl text-white cursor-pointer transition duration-300 ease-in-out"
          >
            <GoArrowLeft size={25} />
          </div>
          <div
            onClick={handleNext}
            className="py-5 px-6 bg-[#023363] rounded-xl text-white cursor-pointer transition duration-300 ease-in-out"
          >
            <GoArrowRight size={25} />
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <section className="lg:px-12 w-full mt-4">
        <div className="pt-10 font-Outfit">
          <div className="relative flex items-center">
            <div
              ref={scrollRef}
              className="flex space-x-[20px] overflow-hidden  scrollbar-hide snap-x pl-2 gap-2"
            >
              {allProjects.map((testimonial, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[300px] md:w-[450px] "
                >
                  <div className="snap-center flex-shrink-0 w-[300px] md:w-[450px] relative">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="md:w-[450px] w-[300px] h-[305px] md:h-[450px] object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
                  </div>

                  <div className="py-4 text-start">
                    <h4 className="md:text-[35px] text-[25px] font-semibold text-[#101011] mb-2">
                      {testimonial.name}
                    </h4>
                    <div className="flex justify-start items-center space-x-2">
                      <span className="md:text-lg text-md px-4 py-2 rounded-xl font-Inter bg-[#EEEEEE] text-gray-600">
                        {testimonial.text1}
                      </span>
                      <span className="md:text-lg text-md px-4 py-2 rounded-xl font-Inter bg-[#EEEEEE] text-gray-600">
                        {testimonial.text2}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        
      </section>
      <button
          className={`flex items-center gap-3 px-6 mx-auto md:px-8 mt-4 md:mt-20 py-[12px] md:py-[14px] text-md md:text-2xl  font-semibold rounded-xl font-Inter ${
            darkMode ? "bg-gray-50 text-black" : "text-white bg-[#023363]"
          } hover:${
            darkMode ? "bg-gray-200" : "bg-[#022040]"
          } transition duration-500`}
        >
          See more projects 
          <i class="uil uil-arrow-up-right text-3xl text-white "></i>
        </button>

    </div>
  );
}

export default Project;
