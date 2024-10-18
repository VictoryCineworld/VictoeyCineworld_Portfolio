import React from "react";
import Second from "./Second";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Corporate Video",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//close-up-of-steadicam-screens-with-female-model-using-laptop-by-table.jpg",
    },
    {
      id: 2,
      title: "Film Production",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//young-videographer-and-his-assistant-adjusting-options-of-video-camera.jpg",
    },
    {
      id: 3,
      title: "Documentary Video",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//reportage.jpg",
    },
    {
      id: 4,
      title: "Music Video",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//videographer-shoots-how-a-talented-latin-american-musician-playing-guitar-in-the-studio.jpg",
    },
    {
      id: 5,
      title: "Social Media",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//young-woman-streaming-a-live-video.jpg",
    },
    {
      id: 6,
      title: "Advertise Video",
      image:
        "https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//raer-view-of-young-videographer-in-black-casualwear-giving-advice-to-models.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#2F3845] text-white p-7 md:p-16 ">
      <h1 className="w-full flex items-center justify-center font-semibold text-sm  text-gray-400 pb-4">
        Services
      </h1>
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 text-gray-300 md:font-semibold">
        Let Cinemox Ignite Your Visual <br /> Narrative
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:pl-28 md:pr-28 opacity-65">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative  bg-gray-800 rounded-lg overflow-hidden text-gray-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 md:h-96 object-cover opacity-70 grayscale"
            />
            <div className="absolute top-2 right-2 text-4xl font-bold opacity-50 md:text-5xl">
              {`0${service.id}`}
            </div>
            <div className="absolute bottom-2 left-2">
              <h3 className="font-bold">{service.title}</h3>
              <p className="text-xs opacity-70 text-gray-200 pt-2">
                Lorem non duis sem lacinia condimentum velit habitasse torquent
                amet elementum elit.
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>

    
  );
};

export default Services;
