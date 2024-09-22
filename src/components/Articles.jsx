import React, { useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import "tailwindcss/tailwind.css";

const articles = [
  {
    title: "How to effectively conduct market research",
    description:
      "We believe in the synergy of human expertise and innovative technology.",
    img: "https://unistudio.co/html/innovar/assets/images/blog/blog-03.jpg",
  },
  {
    title: "A comprehensive guide to marketing",
    description:
      "We believe in the synergy of human expertise and innovative technology.",
    img: "https://unistudio.co/html/innovar/assets/images/blog/blog-04.jpg",
  },
  {
    title: "How can marketing help your business?",
    description:
      "We believe in the synergy of human expertise and innovative technology.",
    img: "https://unistudio.co/html/innovar/assets/images/blog/blog-05.jpg",
  },
];

function Article({ darkMode }) {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? articles.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      if (currentIndex === articles.length - 1) {
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
    <div className="section-header panel flex flex-col w-full md:pt-24 pt-4 md:pb-20 pb-6 items-center sm:items-start text-center sm:text-left sm:mx-0 gap-2 xl:gap-3">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 md:items-end w-full lg:px-24">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl text-center w-40 bg-[#f6f6f7] mb-5 p-3 rounded-lg block text-[#101011]">
            Articles
          </span>
          <h3
            className="text-3xl sm:text-3xl xl:text-[52px] font-bold m-0 px-4 md:px-0"
            style={{ lineHeight: "1.2" }}
          >
            Uncover the Latest Industry
            <br className="hidden sm:block" />
            Insights and Articles
          </h3>
        </div>
      </div>

      {/* Slider Section */}
      <section className="lg:px-20 w-full mt-4">
        <div className="pt-10 font-Outfit">
          <div className="relative flex items-center">
            <div
              ref={scrollRef}
              className="flex space-x-[20px] overflow-hidden scrollbar-hide snap-x pl-2 gap-2"
            >
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[300px] md:w-[450px]"
                >
                  <div className="snap-center flex-shrink-0 w-[300px] md:w-[450px] relative">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="md:w-[450px] w-[300px] h-[305px] md:h-[380px] object-cover rounded-xl"
                    />
                    {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div> */}
                  </div>

                  <div className="py-4 text-start font-Inter">
                    <h4 className="md:text-[34px] text-[20px] font-semibold text-[#101011] mb-2">
                      {article.title}
                    </h4>
                    <p className="text-xl text-gray-600">
                      {article.description}
                    </p>
                    <div className="py-8 text-[#02337c] cursor-pointer group">
                      <h1 className="flex items-center gap-4 text-2xl font-Inter font-semibold relative pb-1.5 overflow-hidden">
                        Read more
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          <i class="uil uil-arrow-up-right text-2xl text-[#023363] "></i>
                        </span>
                        <span className="absolute bottom-0 left-0 w-40 h-[2px] bg-transparent border border-gray-200 group-hover:bg-black">
                          <span className="absolute inset-0 w-0 h-full bg-black  transition-all duration-500 group-hover:w-full"></span>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Article;
