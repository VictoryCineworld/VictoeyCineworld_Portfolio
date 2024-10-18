import React from "react";
import projectBackground from '../assets/projectBackground.png'

const Second = () => {
  return (
    <div
      style={{ backgroundImage: `url(${projectBackground})` }}
      className=" w-full  bg-cover bg-center pt-7 pb-8 text-white relative"
    >
       
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#2F3845]/60 to-[#2F3845]/90 pt-24"
      ></div>

      {/* Content Section */}
      <div className="w-full relative text-center  mx-auto pt-10">
        <h1 className="text-xl font-semibold md:text-3xl md:font-semibold ">
          Partner with Cinemox Today!
        </h1>
        <h2 className="text-xl font-semibold md:text-3xl md:font-semibold mb-6">
          Contact Us for a Cinematic <br/>Journey.
        </h2>
        <p className="text-xs font-semibold text-gray-400 md:text-base mb-8 px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper<br/> mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-yellow-100 text-gray-900 px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors">
          Discover More
        </button>
      </div>

    
      
 

    </div>
  );
};

export default Second;
