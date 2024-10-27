import React, { useState } from "react";
import Logo from '../assets/CinemoxLogo.png';

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:hidden bg-[#2F3845] bg-opacity-60">
      {/* Mobile View */}
      <div className="w-full flex items-center justify-between p-2 relative">
        <div className="ml-1 flex items-center justify-center flex-row gap-2">
          <div className="text-sm">
            <img className="w-24" src={Logo} alt="Cinemox Logo" />
          </div>
        </div>

        <div onClick={toggleMenu} className="text-white">
          {/* Hamburger Button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer border rounded-full p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute flex flex-col bg-slate-700/70 p-2 rounded-lg top-12 right-2 z-20 gap-2 font-semibold">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#about_us" className="text-white hover:text-gray-300">
              About Us
            </a>
            <a href="#services" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#project" className="text-white hover:text-gray-300">
              Project
            </a>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact Us
            </a>
            <a href="#pages" className="text-white hover:text-gray-300">
              Pages
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;
