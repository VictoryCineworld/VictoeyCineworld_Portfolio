import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:pt-10 md:pb-10 bg-gray-600 text-white">
      <footer className="py-8 px-12 flex flex-col md:flex-row  justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">ACME CORPORATION</h2>
          <p className="text-sm mt-2 hidden md:block text-gray-400 font-semibold pt-3">
            We develop and produce high-quality films and television content,
            emphasizing
            <br /> innovative storytelling and collaboration with industry
            professionals.
          </p>
        </div>
        <div className="md:flex md:flex-row  items-center justify-center   pt-7 space-y-4 hidden md:block md:gap-11">
          <div className="  space-y-4 pt-2 ">
            <a href="#" className="block text-sm  hover:text-gray-500">
              About
            </a>
            <a href="#services" className="block text-sm hover:text-gray-500">
              Services
            </a>
            <a href="#" className="block text-sm hover:text-gray-500">
              Docs
            </a>
          </div>
          <div className="  space-y-4 ">
            <a href="#" className="block text-sm hover:text-gray-500">
              Terms & Conditions
            </a>
            <a href="#" className="block text-sm hover:text-gray-500">
              Privacy Policy
            </a>
            <a href="#" className="block text-sm hover:text-gray-500">
              Cookie Policy
            </a>
          </div>
        </div>
        <div className="pt-14 md:pt-1 ">
          <h3 className="text-sm font-semibold mb-2 pt-3 pl-20">Let's chat!</h3>
          <a
            href="mailto:haddavy@comcast.net"
            className="block text-sm hover:text-gray-500 pl-8"
          >
            hello@victorycineworld.com
          </a>
          <div className="flex space-x-4 mt-4 text-white pl-16">
            <a href="#" className=" hover:text-gray-500">
              <FaInstagram size={18} />
            </a>
            <a href="#" className=" hover:text-gray-500">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className=" hover:text-gray-500">
              <FaGithub size={18} />
            </a>
            <a href="#" className=" hover:text-gray-500">
              <FaTelegramPlane size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
