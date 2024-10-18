import React from "react";
import Second from "./Second";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Inspirational Documentary",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//reportage.jpg",
    },
    {
      id: 2,
      title: "Music Video Clip",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//videographer-holding-camera.jpg",
    },
    {
      id: 3,
      title: "Live Event Broadcast",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//unrecognizable-black-woman-in-dark-broadcast-studio.jpg",
    },
    {
      id: 4,
      title: "Educational Animation",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//modern-man-working-remotely-on-a-computer-from-home-office.jpg",
    },
    {
      id: 5,
      title: "Short Drama Story",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//male-and-female-drama-students-at-performing-arts-school-in-studio-improvisation-class.jpg",
    },
    {
      id: 6,
      title: "Product or service review",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//contemeporary-videographer-or-cameraman-adjusting-video-camera-options.jpg",
    },
  ];
  return (
    <>
      <div className="pt-4 bg-[#2F3845]">
        <h1 className="w-full flex items-center justify-center text-sm font-semibold text-gray-400 pb-2 bg-[#2F3845]">
          Our Projects
        </h1>
      </div>
      <div>
        <Second />
      </div>
      {/* ---------------Cards--------------- */}
      <div>
        <div className="w-full bg-[#2F3845] text-white p-7 md:p-16 ">
          <h1 className="w-full flex items-center justify-start md:pl-24 text-yellow-100 font-semibold text-sm ">
            Our Projects
          </h1>

          <div className="flex items-center justify-start">
            <div>
              <h2 className="flex items-center justify-start text-center text-lg md:text-4xl font-bold mb-8 text-gray-300 md:font-semibold md:pl-24">
                We make your idea come <span>to life</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:pl-28 md:pr-28 opacity-65">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative bg-gray-800 rounded-lg overflow-hidden text-gray-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 md:h-96 object-cover opacity-70"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-25 rounded-full backdrop-blur-sm">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-xs opacity-70 text-gray-200 pt-2">
                    Lorem non duis sem lacinia condimentum velit habitasse
                    torquent amet elementum elit.
                  </p>
                  <button className="border rounded bg-yellow-100 p-1 px-4 m-2 text-black">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
