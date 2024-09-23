import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";


const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#023363] text-white p-4 rounded-full shadow-lg hover:bg-[#022950] transition duration-300"
        >
          <FaChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default GoToTop;
