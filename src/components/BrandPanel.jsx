import React, { useRef } from "react";
import huaweiLight from "../assets/huawei.png";
import huaweiDark from "../assets/huaweiDark.png";
import spotify from "../assets/spotify.png";
import spotifylight from "../assets/spotifylight.jpg";
import netflix from "../assets/netflix.png";
import netflixDark from "../assets/netflixDark.png";
import lexus from "../assets/lexus.png";

function BrandPanel({ darkMode }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-8">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
      >
        &#10094;
      </button>
      
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth"
      >
        <a target="_blank" href="">
          <i className="fa-brands fa-shopify text-4xl mx-2"></i>
        </a>

        <a target="_blank" href="">
          {darkMode ? (
            <img src={netflix} alt="Netflix" className="w-24 h-auto mx-2" />
          ) : (
            <img src={netflixDark} alt="Netflix" className="w-24 h-auto mx-2" />
          )}
        </a>

        <a target="_blank" href="">
          {darkMode ? (
            <img src={huaweiLight} alt="Huawei" className="w-20 h-auto mx-2" />
          ) : (
            <img src={huaweiDark} alt="Huawei" className="w-20 h-auto mx-2" />
          )}
        </a>

        <a target="_blank" href="">
          <img src={lexus} alt="Lexus" className="w-24 h-auto mx-2" />
        </a>

        <a target="_blank" href="">
          {darkMode ? (
            <img src={spotify} alt="Spotify" className="w-28 h-auto mx-2" />
          ) : (
            <img src={spotifylight} alt="Spotify" className="w-28 h-auto mx-2" />
          )}
        </a>
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
      >
        &#10095;
      </button>
    </div>
  );
}

export default BrandPanel;
