import React from "react";

const Form = () => {
  return (
    <div className="w-full flex md:pr-28 md:pl-28 bg-[#2F3845]">
      {/* Left section with form */}
      <div className="md:w-1/2 bg-gray-800 bg-opacity-90 p-2 relative">
        {/* Background world map image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-20"
          style={{
            backgroundImage: `url('https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//O9FG4R1.png')`,
          }}
        ></div>
        <div className=" w-full relative z-10 text-gray-300">
          <h3 className="text-sm font-medium uppercase tracking-widest text-yellow-200">
            Get in Touch
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Don't hesitate to contact us for more information.
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-100 hover:bg-yellow-300 text-gray-800 font-semibold px-6 py-3 rounded mt-4 w-full"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Right section with image */}
      <div
        className="w-1/2 bg-cover bg-center relative hidden md:block"
        style={{
          backgroundImage: `url('https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//02//side-view-of-smiling-videographer-with-camera-in-photo-studio.jpg')`,
        }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-brightness-50 grayscale"></div>
      </div>
    </div>
  );
};

export default Form;
