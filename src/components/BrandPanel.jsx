import React from "react";
import { RiNetflixFill } from "react-icons/ri";
import { SiHuawei } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import lexus from "../assets/lexus.png";
import { createContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

function BrandPanel() {

  const { darkmode } = createContext(DarkModeContext)

  return (
    <div className={`w-full px-4 sm:px-12 lg:px-32 py-2 flex justify-around  items-center gap-8 lg:gap-8 flex-wrap ${darkmode ? 'bg-[#010d19]' : ''}`}>
      {/* Shopify Icon */}
      <a target="_blank" href="">
        <i className="fa-brands fa-shopify text-5xl sm:text-5xl lg:text-7xl"></i>
      </a>

      {/* Netflix Icon */}
      <a target="_blank" href="">
        <RiNetflixFill size="clamp(50px, 5vw, 60px)" />
      </a>

      {/* Huawei Icon */}
      <a target="_blank" href="">
        <SiHuawei size="clamp(50px, 5vw, 60px)" />
      </a>

      {/* Spotify Icon */}
      <a target="_blank" href="">
        <FaSpotify size="clamp(50px, 5vw, 60px)" />
      </a>
    </div>
  );
}

export default BrandPanel;
