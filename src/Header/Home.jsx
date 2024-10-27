import React from "react";
import Navbar from "../Navbar/Navbar";
import LogosSection from "./LogoSection";
import Middle from "../AboutUs/Middle";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <div
          className="relative h-2/3 text-gray-300 "
          style={{
            backgroundImage: `url('https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//02//videographer-looking-through-camera-in-photo-studio.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Navbar */}

          <Navbar />

          {/* Main Content */}
          <div className="w- full flex flex-col items-center justify-center h-2/3 px-4 text-center bg-gradient-to-b from-[#2F3845]/60 to-[#2F3845]/90 pt-24">
            {" "}
            <h1 className="text-2xl font-semibold md:text-4xl md:font-semibold mb-4  ">
              Experience the Difference <br />
              <span>
                {" "}
                with Our Professional
                <br />
              </span>
              <span> Video Production.</span>
            </h1>
            <p className="text-xs text-gray-300 mb-8">
              A video production and filmmaking website showcases services and
              portfolios, helping clients bring visual stories to life. It
              highlights <br />projects, services, and contact options.
               condimentum volutpat erat mattis senectus tincidunt.
            </p>
            <div className="w-full flex items-center justify-center gap-2 pb-10">
              <div>
                <button className="bg-yellow-100 text-black text-sm px-4 py-1 rounded hover:bg-yellow-600 flex items-center">
                  DISCOVER MORE
                </button>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div>
            <LogosSection />
          </div>
        </div>
      </div>
      {/* <div>
     <Middle/>
     </div> */}
    </>
  );
};

export default Home;
