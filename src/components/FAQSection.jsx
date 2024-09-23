import React, { useState, useRef, useEffect } from "react";
import '../App.css'; 
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "1. What is business consulting?",
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Varium.",
  },
  {
    question: "2. Why wouldn’t I just hire my own animator?",
    answer: "Feel free to do so. Kloomix does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).",
  },
  {
    question: "3. How Does variuem Ensure Data Privacy?",
    answer: "Definitely! Please use it however you like; we don’t limit it.",
  },
  {
    question: "4. Can I use this to create and sell a product?",
    answer: "Do not ever consider doing it.",
  },
  {
    question: "5. Do You Update Your Job Listings?",
    answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
  },
  {
    question: "6. Do I need to know about how to code?",
    answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",
  },
  {
    question: "7. Can I use it for commercial projects?",
    answer: "Feel free to do so. Kloomix does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).",
  },
  {
    question: "8. What is your refund policy?",
    answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick, id }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`accordion bg-[#f6f6f7] px-5 py-7 rounded-xl transition duration-500  mb-4 md:mb-8`}
      id={`basic-heading-${id}`}
    >
      <button
        onClick={onClick}
        className="accordion-toggle inline-flex items-center justify-between  text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500  focus:outline-none"
        aria-controls={`basic-collapse-${id}`}
        aria-expanded={isOpen}
      >
        <h5 className="font-semibold md:text-[22px] text-md text-black hover:text-[#3f3f41]">{question}</h5>
        <div className="flex items-center">
          {/* Minus Icon */}
          <FiMinus
            size={38}
            className={`text-black bg-[#dfdfe0] p-1 rounded-full transition duration-500 ${isOpen ? "" : "hidden"} `}
          />
          {/* Plus Icon */}
          <IoIosAdd
            size={40}
            className={`text-black bg-[#dfdfe0] p-1 rounded-full transition duration-500 ${isOpen ? "hidden" : "block"} `}
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className="accordion-content overflow-hidden pr-4 mt-2 text-lg text-gray-900 font-Inter leading-6 transition-all duration-500"
        style={{ maxHeight: height, opacity: isOpen ? 1 : 0 }}
        id={`basic-collapse-${id}`}
        role="region"
        aria-labelledby={`basic-heading-${id}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-8 px-2 md:px-10 lg:px-24">
      <div className="mx-auto">
      <div className="mb-12 text-center md:text-start">
        <span className="text-xl text-center mx-auto md:mx-0 w-40 bg-[#f6f6f7] mb-5 p-3 rounded-lg block text-[#101011]">
          Help Center
        </span>
        <h3
          className="text-3xl sm:text-3xl xl:text-[52px]  font-bold m-0] px-4 md:px-0"
          style={{ lineHeight: "1.2" }}
        >
        Frequently Asked Questions
        </h3>
      </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              id={index + 1}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
