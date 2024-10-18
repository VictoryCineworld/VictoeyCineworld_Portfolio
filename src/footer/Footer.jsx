import React from "react";
import cinemox from '../assets/CinemoxLogo.png';
import back from '../assets/back.png'
const Footer = () => {
  return (
    <div className="relative text-gray-300 bg-slate-500">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center  -z-10"
        style={{ back: `url(${back})` }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-3">
        {/* Newsletter Section */}
        <div className="bg-[#2F3845] bg-opacity-90  md:p-10 mx-6 md:mx-28 p-2 rounded-lg backdrop-blur-md md:flex md:gap-60">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Newsletter</h3>
            <p className="text-sm mt-2">
              Signup for our newsletter to get update information, <br /> news, insight, or promotions.
            </p>
          </div>
          <div className="flex mt-4 flex-col md:w-1/3 space-y-3 md:ml-11">
            <input
              type="email"
              placeholder="Email"
              className="flex-grow p-3 rounded-l bg-gray-400 bg-opacity-80 text-white placeholder-white focus:outline-none"
            />
            <button
              className="bg-yellow-100 hover:bg-yellow-300 text-gray-800 font-semibold py-2 rounded"
            >
              SIGN UP
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between  items-center border-t border-gray-700 pt-6 pb-4 mt-6 mx-6 md:mx-28">
          {/* Logo and Links */}
          <div className="flex flex-col md:flex-row items-center space-x-8 mb-4 md:mb-0 md:space-x-44">
            <img
              src={cinemox}
              alt="Cinemox Logo"
              className="h-8"
            />
            <div className="flex  space-x-7  text-xs md:flex md:items-end md:justify-end">
              <a href="#about_us" className="hover:text-yellow-400">About Us</a>
              <a href="#project" className="hover:text-yellow-400">Project</a>
              <a href="#" className="hover:text-yellow-400">Terms Of Us</a>
              <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400">Cookie Policy</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500 text-center md:text-right">
            &copy; 2024 Cinemox. All rights reserved. Powered by MoxCreative.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
