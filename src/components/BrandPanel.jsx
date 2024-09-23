import React from "react";
import { RiNetflixFill } from "react-icons/ri";
import { SiHuawei } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import lexus from "../assets/lexus.png"

function BrandPanel({darkMode}) {
  return (
    <div class=" w-full lg:px-32 py-8 flex justify-between items-center  gap-12">
      <a target="_blank" href="">
        <i className="fa-brands fa-shopify text-7xl "></i>
      </a>

      <a target="_blank" href="">
        <RiNetflixFill size={60}/>
      </a>

      <a target="_blank" href="">
        <SiHuawei size={60}/>
      </a>

      <a target="_blank" href="">
        {
          darkMode ? <img src={lexus} alt="Huawei" className="w-32 h-auto"/> : <img src={lexus} alt="Huawei" className="w-44 h-auto"/>
        }
      </a>
    
      <a target="_blank" href="">
      <FaSpotify size={60}/>
      </a>
    </div>
  );
}

export default BrandPanel;