import React from "react";


import bannerImage from '../../public/banner.jpg';

function Banner() {
    return (
        <div
            className="relative h-600px bg-cover bg-center flex items-center justify-center w-full"
            style={{ backgroundImage: `url(${bannerImage.src})` }}
        >
            <div className="text-center text-white min-h-[600px] w-full flex flex-col justify-center items-center">
                <h1 className="text-[72px] sm:text-[22px] font-bold mb-4">Find Your Perfect Tech Match</h1>
                <p className="text-[24px] sm:text-[16px] mb-8 px-[20%]">
                    Get the best deals on the latest tech devices, including phones,
                    tablets, laptops, and accessories. Shop now and save big!
                </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
    );
}

export default Banner