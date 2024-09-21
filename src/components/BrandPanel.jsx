import React from "react";
import huaweiLight from "../assets/huawei.png";
import huaweiDark from "../assets/huaweiDark.png";
import spotify from "../assets/spotify.png";
import spotifylight from "../assets/spotifylight.jpg";
import netflix from "../assets/netflix.png";
import netflixDark from "../assets/netflixDark.png";
import lexus from "../assets/lexus.png";

function BrandPanel({ darkMode }) {
  return (
    <div className="w-full lg:px-[100px] py-8 flex overflow-x-auto gap-4">
      <a target="_blank" href="">
        <i className="fa-brands fa-shopify text-4xl"></i>
      </a>

      <a target="_blank" href="">
        {darkMode ? (
          <img src={netflix} alt="Netflix" className="w-24 h-auto" />
        ) : (
          <img src={netflixDark} alt="Netflix" className="w-24 h-auto" />
        )}
      </a>

      <a target="_blank" href="">
        {darkMode ? (
          <img src={huaweiLight} alt="Huawei" className="w-20 h-auto" />
        ) : (
          <img src={huaweiDark} alt="Huawei" className="w-20 h-auto" />
        )}
      </a>

      <a target="_blank" href="">
        <img
          src={lexus}
          alt="Lexus"
          className={`w-${darkMode ? '24' : '28'} h-auto`}
        />
      </a>

      <a target="_blank" href="">
        {darkMode ? (
          <img src={spotify} alt="Spotify" className="w-28 h-auto" />
        ) : (
          <img src={spotifylight} alt="Spotify" className="w-28 h-auto" />
        )}
      </a>
    </div>
  );
}

export default BrandPanel;
