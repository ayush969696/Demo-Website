import React from "react";
import { RiNetflixFill } from "react-icons/ri";
import huaweiLight from "../assets/huawei.png"
import huaweiDark from "../assets/huaweiDark.png"
import spotify from "../assets/spotify.png"
import spotifylight from "../assets/spotifylight.jpg"
import netflix from "../assets/netflix.png"
import netflixDark from "../assets/netflixDark.png"
import lexus from "../assets/lexus.png"

function BrandPanel({darkMode}) {
  return (
    <div class=" w-full lg:px-[99px] py-2 flex justify-between items-center  gap-12">
      <a target="_blank" href="">
        <i className="fa-brands fa-shopify text-6xl "></i>
      </a>

      <a target="_blank" href="">
      {
          darkMode ? <img src={netflix} alt="Huawei" className="w-36 h-auto"/> : <img src={netflixDark} alt="Huawei" className="w-36 h-auto"/>
        }
      </a>

      <a target="_blank" href="">
        {
          darkMode ? <img src={huaweiLight} alt="Huawei" className="w-24 h-auto"/> : <img src={huaweiDark} alt="Huawei" className="w-24 h-auto"/>
        }
      </a>

      <a target="_blank" href="">
        {
          darkMode ? <img src={lexus} alt="Huawei" className="w-32 h-auto"/> : <img src={lexus} alt="Huawei" className="w-44 h-auto"/>
        }
      </a>
    
      <a target="_blank" href="">
      {
          darkMode ? <img src={spotify} alt="Huawei" className="w-44 h-auto"/> : <img src={spotifylight} alt="Huawei" className="w-44 h-auto"/>
        }
      </a>
    </div>
  );
}

export default BrandPanel;