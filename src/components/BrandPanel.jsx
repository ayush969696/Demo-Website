import React from "react";
import { RiNetflixFill } from "react-icons/ri";
import { SiHuawei } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import lexus from "../assets/lexus.png";

function BrandPanel() {
  return (
    <div className="w-full bg-transparent px-4 sm:px-12 lg:px-32 py-2 flex justify-between  items-center gap-8 lg:gap-12 flex-wrap">
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
