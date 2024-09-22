import React, { useRef, useState, useEffect } from "react";
import { RiNetflixFill } from "react-icons/ri";
import { FaShopify, FaSpotify } from "react-icons/fa";
import { SiHuawei } from "react-icons/si";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const testimonials = [
  {
    name: "Mark Zellers",
    role: "Co-Founder",
    company: "Netflix",
    companyLogo: <RiNetflixFill size={40} />, // Adjusted size for better alignment
    image: "https://unistudio.co/html/innovar/assets/images/avatars/01.png",
    feedback:
      "Working with Innovar has been a game-changer for our business. Their strategic insights and tailored solutions have streamlined our operations and significantly boosted our efficiency. We couldn't be happier with the results.",
    rating: 5,
  },
  {
    name: "John Zellers",
    role: "Engineering Manager",
    company: "Shopify",
    companyLogo: <FaShopify size={40} />,
    image: "https://unistudio.co/html/innovar/assets/images/avatars/02.png",
    feedback:
      "The team at Innovar provided us with invaluable guidance and support during our transition to a new software platform. Their expertise and hands-on approach made the entire process seamless and stress-free.",
    rating: 5,
  },
  {
    name: "André Garcia",
    role: "Product Manager",
    company: "Huawei",
    companyLogo: <SiHuawei size={40} />,
    image: "https://unistudio.co/html/innovar/assets/images/avatars/03.png",
    feedback:
      "We engaged Innovar to help us develop a new marketing strategy, and the impact has been remarkable. Their innovative ideas and practical advice have driven a significant increase in customer engagement and sales.",
    rating: 5,
  },
  {
    name: "André Garcia",
    role: "Product Manager",
    company: "Spotify",
    companyLogo: <FaSpotify size={40} />,
    image: "https://unistudio.co/html/innovar/assets/images/avatars/04.png",
    feedback:
      "We engaged Innovar to help us develop a new marketing strategy, and the impact has been remarkable. Their innovative ideas and practical advice have driven a significant increase in customer engagement and sales.",
    rating: 5,
  },
  {
    name: "André Garcia",
    role: "Product Manager",
    company: "Lexus",
    companyLogo: "", // No logo provided
    image: "https://unistudio.co/html/innovar/assets/images/avatars/05.png",
    feedback:
      "We engaged Innovar to help us develop a new marketing strategy, and the impact has been remarkable. Their innovative ideas and practical advice have driven a significant increase in customer engagement and sales.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gray-100 p-6 md:my-20 rounded-lg w-full sm:w-80 md:w-96 flex-shrink-0 font-Inter snap-start">
    <div className="text-[4rem] text-[#023363] mb-2 leading-none">“</div>
    <p className="text-gray-600 text-xl mb-4">{testimonial.feedback}</p>
    <div className="flex items-center mb-6">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full mr-4 object-cover"
      />
      <div>
        <h4 className="text-lg font-bold">{testimonial.name}</h4>
        <p className="text-gray-500">{testimonial.role}</p>
      </div>
    </div>

    <div className="w-full h-[1.2px] bg-gray-300"></div>

    <div className="flex justify-between items-center mt-6">
      <div className="text-4xl text-[#505155]">{testimonial.companyLogo}</div>
      <div className="flex">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.518 4.674a1 1 0 00.95.69h4.926c.969 0 1.371 1.24.588 1.81l-3.987 2.9a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.987-2.9a1 1 0 00-1.176 0l-3.987 2.9c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.993 9.1c-.783-.57-.38-1.81.588-1.81h4.926a1 1 0 00.95-.69l1.518-4.674z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });

      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      });

      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Reset scroll position when currentIndex changes (for looping)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="md:py-20 py-8 px-2 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 md:items-end w-full lg:px-24">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl text-center w-40 bg-[#f6f6f7] mb-5 p-3 rounded-lg block text-[#101011]">
            Projects
          </span>
          <h3
            className="text-3xl sm:text-3xl xl:text-[52px] font-bold m-0 px-4 md:px-0 text-center md:text-left"
            style={{ lineHeight: "1.2" }}
          >
            We specialize in the <br className="hidden sm:block" /> following case
            studies
          </h3>
        </div>
        <div className="btn flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="py-4 px-5 bg-[#023363] rounded-xl text-white cursor-pointer transition duration-300 ease-in-out hover:bg-[#022a4d]"
            aria-label="Previous Testimonial"
          >
            <GoArrowLeft size={30} />
          </button>
          <button
            onClick={handleNext}
            className="py-4 px-5 bg-[#023363] rounded-xl text-white cursor-pointer transition duration-300 ease-in-out hover:bg-[#022a4d]"
            aria-label="Next Testimonial"
          >
            <GoArrowRight size={30} />
          </button>
        </div>
      </div>

      <div className="relative mt-8 md:px-24">
        <div
          className="flex space-x-0 sm:space-x-10 overflow-hidden scroll-smooth snap-x snap-mandatory"
          ref={scrollRef}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
