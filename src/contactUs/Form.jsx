import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target[0].value,
      company: event.target[1].value,
      phone: event.target[2].value,
      email: event.target[3].value,
      subject: event.target[4].value,
      message: event.target[5].value,
    };

    try {
      const response = await fetch("http://localhost:8000/api/submit-form/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        <div className="w-full relative z-10 text-gray-300">
          <h3 className="text-sm font-medium uppercase tracking-widest text-yellow-200">
            Get in Touch
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Don't hesitate to contact us for more information.
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 bg-opacity-80 text-white placeholder-gray-400 focus:outline-none h-32"
              required
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
