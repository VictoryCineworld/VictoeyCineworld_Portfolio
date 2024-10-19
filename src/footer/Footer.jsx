// import React from "react";
// import cinemox from '../assets/CinemoxLogo.png';
// import back from '../assets/back.png'
// const Footer = () => {
//   return (
//     <div className="relative text-gray-300 bg-slate-500">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center  -z-10"
//         style={{ back: `url(${back})` }}
//       ></div>

//       {/* Content Wrapper */}
//       <div className="relative z-10 pt-3">
//         {/* Newsletter Section */}
//         <div className="bg-[#2F3845] bg-opacity-90  md:p-10 mx-6 md:mx-28 p-2 rounded-lg backdrop-blur-md md:flex md:gap-60">
//           <div>
//             <h3 className="text-lg md:text-xl font-semibold">Newsletter</h3>
//             <p className="text-sm mt-2">
//               Signup for our newsletter to get update information, <br /> news, insight, or promotions.
//             </p>
//           </div>
//           <div className="flex mt-4 flex-col md:w-1/3 space-y-3 md:ml-11">
//             <input
//               type="email"
//               placeholder="Email"
//               className="flex-grow p-3 rounded-l bg-gray-400 bg-opacity-80 text-white placeholder-white focus:outline-none"
//             />
//             <button
//               className="bg-yellow-100 hover:bg-yellow-300 text-gray-800 font-semibold py-2 rounded"
//             >
//               SIGN UP
//             </button>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="flex flex-col md:flex-row justify-between  items-center border-t border-gray-700 pt-6 pb-4 mt-6 mx-6 md:mx-28">
//           {/* Logo and Links */}
//           <div className="flex flex-col md:flex-row items-center space-x-8 mb-4 md:mb-0 md:space-x-44">
//             <img
//               src={cinemox}
//               alt="Cinemox Logo"
//               className="h-8"
//             />
//             <div className="flex  space-x-7  text-xs md:flex md:items-end md:justify-end">
//               <a href="#about_us" className="hover:text-yellow-400">About Us</a>
//               <a href="#project" className="hover:text-yellow-400">Project</a>
//               <a href="#" className="hover:text-yellow-400">Terms Of Us</a>
//               <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
//               <a href="#" className="hover:text-yellow-400">Cookie Policy</a>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="text-xs text-gray-500 text-center md:text-right">
//             &copy; 2024 Cinemox. All rights reserved. Powered by MoxCreative.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

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
            emphasizing<br/> innovative storytelling and collaboration with industry
            professionals.
          </p>
        </div>
        <div className="md:flex md:flex-row  items-center justify-center   pt-7 space-y-4 hidden md:block md:gap-11">
          <div className="  space-y-4 pt-1">
            <a href="#" className="block text-sm hover:text-gray-500">
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
