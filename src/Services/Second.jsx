import React from "react";

const Second = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-full max-w-6xl mx-auto flex bg-gray-800 rounded-lg overflow-hidden">
        {/* Background Image Section */}
        <div
          className="w-2/5 relative opacity-50"
          style={{
            backgroundImage: "url('https://theme.creativemox.com//cinemox//wp-content//uploads//sites//23//2024//03//video-production-backstage-behind-the-scenes-of-creating-video-content-a-professional-team-of.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderTopRightRadius: "60%",
            borderBottomRightRadius: "60%",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-0 left-0 p-8 text-white z-10">
            <h3 className="text-sm font-semibold uppercase">Why Choose Us</h3>
            <h1 className="text-3xl font-bold mt-4">
              We build a solid foundation to achieve extraordinary achievements
            </h1>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-1/2 p-10">
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                1
              </span>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Expertise in Visual Storytelling
                </h4>
                <p className="text-sm text-gray-400">
                  Sociis tempus habitasse taciti eros justo inceptos conubia
                  condimentum.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                2
              </span>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Cutting-Edge Technology
                </h4>
                <p className="text-sm text-gray-400">
                  Sociis tempus habitasse taciti eros justo inceptos conubia
                  condimentum.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                3
              </span>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Diverse Portfolio of Success
                </h4>
                <p className="text-sm text-gray-400">
                  Sociis tempus habitasse taciti eros justo inceptos conubia
                  condimentum.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                4
              </span>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Creative Collaboration
                </h4>
                <p className="text-sm text-gray-400">
                  Sociis tempus habitasse taciti eros justo inceptos conubia
                  condimentum.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Second;
