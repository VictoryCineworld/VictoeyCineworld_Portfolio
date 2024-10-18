import React, { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Logo from "../assets/CinemoxLogo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [light, setLight] = useState("day");

  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.body.classList = [theme];
    if (light === "night") {
      setLight("day");
    } else {
      setLight("night");
    }
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      document.body.classList.add("night");
    } else {
      document.body.classList.add("day");
    }
  }, []);

  return (
    <>
      <div className="hidden md:block bg-[#2F3845] bg-opacity-60">
        <nav className="w-full text-[#212832] p-4 flex items-center justify-between">
          {/* Brand Name */}
          <div className="text-3xl font-bold font-mono  pl-10">
            <img className="h-10" src={Logo} />
          </div>

          <div className="w-full hidden sm:flex md:pr-16 text-gray-400 items-center justify-center">
            <a
              href="#"
              className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2 scroll-smooth"
            >
              Home
            </a>
            <a
              href="#about_us"
              className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2 scroll-smooth"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
            >
              Services
            </a>
            <a
              href="#project"
              className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2 scroll-smooth"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
            >
              Contact Us
            </a>

            <a
              href="#pages"
              className="text-grey-600 hover:text-gray-300 px-5 font-semibold pt-2"
            >
              Pages
            </a>
          </div>
        </nav>
      </div>
      <div>
        <Mobile />
      </div>
    </>
  );
};

export default Navbar;
