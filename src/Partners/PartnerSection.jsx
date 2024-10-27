import React from "react";
import backgroundImage from "../assets/Partner.jpg";

const PartnerSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className=" w-full  bg-cover bg-center pt-7 text-white relative"
    >
      <h1 className="w-full flex items-center justify-center text-sm font-semibold pb-9">
        Partners
      </h1>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2F3845]/60 to-[#2F3845]/90 pt-24"></div>

      {/* Content Section */}
      <div className="w-full relative text-center  mx-auto pt-10">
        <h1 className="text-xl font-semibold md:text-3xl md:font-semibold ">
          Partner with Victory Cineworld Today!
        </h1>
        <h2 className="text-xl font-semibold md:text-3xl md:font-semibold mb-6">
          Contact Us for a Cinematic <br />
          Journey.
        </h2>
        <p className="text-xs font-semibold text-gray-400 md:text-base mb-8 px-6">
          Partner with Victory Cineworld for an unforgettable cinematic journey. Contact
          us <br />
          today to bring your vision to life on screen...
        </p>
        <button className="bg-yellow-100 text-gray-900 px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors">
          Discover More
        </button>
      </div>

      {/* Statistics Section */}

      <div className="w-full relative mt-20 bg-[#2F3845] flex items-center justify-center text-yellow-100 py-4 gap-2 md:space-x-32">
        <div className="text-center">
          <h3 className="text-lg md:text-4xl font-bold">14K+</h3>
          <p className="text-xs md:text-base mt-1 text-gray-400 font-semibold ">
            Happy Client
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg md:text-4xl font-bold">21K+</h3>
          <p className="text-xs md:text-base mt-1 text-gray-400 font-semibold">
            Project Done
          </p>
        </div>
        <div className="text-center ">
          <h3 className="text-lg md:text-4xl font-bold">4.8</h3>
          <p className="text-xs md:text-base mt-1 text-gray-400 font-semibold">
            Client Reviews
          </p>
        </div>
        <div className="text-center ">
          <h3 className="text-lg md:text-4xl font-bold">55+</h3>
          <p className="text-xs md:text-base mt-1 text-gray-400 font-semibold">
            Award Winning
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
