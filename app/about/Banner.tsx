import React from "react";

import bannerImage from "../assets/banner.jpg";

function Banner() {
  return (
    <div
      className="relative mb-12 xs:mb-4 h-600px bg-cover bg-center flex items-center justify-center w-full"
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      <div className="text-center text-white min-h-[600px] w-full flex flex-col justify-center items-center">
        <h1 className="text-[72px] sm:text-[22px] font-bold mb-4">
          Find Your Perfect Tech Match!
        </h1>
      </div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
}

export default Banner;
