// import React from "react";

// const Education = () => {
//   return (
//     <ul>
//       {/* First Education Item */}
//       <li>
//         <img src="https://media.istockphoto.com/vectors/faceless-businessman-avatar-man-in-suit-with-blue-tie-vector-id654046576?k=6&m=654046576&s=612x612&w=0&h=em42-EpbxE4JO9qrXX5sJ8qw1JWDm3-1oXnw0-vnBcw=" />
//         <div className="icon">
//           <i className="fa fa-briefcase"></i>
//         </div>
//         <span className="time open-sans-font text-uppercase">2015</span>
//         <h5 className="poppins-font text-uppercase">
//           ENGINEERING DEGREE
//           <span className="place open-sans-font">OXFORD UNIVERSITY</span>
//         </h5>
//         <p className="open-sans-font">
//           Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
//           adipisicing elit.
//         </p>
//       </li>

//       {/* Second Education Item */}
//       <li>
//         <div className="icon">
//           <i className="fa fa-briefcase"></i>
//         </div>
//         <span className="time open-sans-font text-uppercase">2012</span>
//         <h5 className="poppins-font text-uppercase">
//           MASTER DEGREE
//           <span className="place open-sans-font">KIEV UNIVERSITY</span>
//         </h5>
//         <p className="open-sans-font">
//           Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
//           elit, tempor incididunt.
//         </p>
//       </li>

//       {/* Third Education Item */}
//       <li>
//         <div className="icon">
//           <i className="fa fa-briefcase"></i>
//         </div>
//         <span className="time open-sans-font text-uppercase">2009</span>
//         <h5 className="poppins-font text-uppercase">
//           BACHELOR DEGREE
//           <span className="place open-sans-font">TUNIS HIGH SCHOOL</span>
//         </h5>
//         <p className="open-sans-font">
//           Lorem ipsum dolor sit amet, tempor incididunt ut labore consectetur
//           elit, sed do eiusmod tempor duntt.
//         </p>
//       </li>
//     </ul>
//   );
// };

// export default Education;


import React, { useState } from "react";

const Education = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <ul className="grid grid-cols-2 gap-8">
      {/* Education Item */}
      <li
        className="relative cursor-pointer"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        {/* Image */}
        <img
          src="https://media.istockphoto.com/vectors/faceless-businessman-avatar-man-in-suit-with-blue-tie-vector-id654046576?k=6&m=654046576&s=612x612&w=0&h=em42-EpbxE4JO9qrXX5sJ8qw1JWDm3-1oXnw0-vnBcw="
          alt="Education"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />

        {/* Dropdown Details */}
        <div
          className={`absolute top-full left-0 w-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
            isDropdownVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4">
            <div className="icon mb-2">
              <i className="fa fa-briefcase text-xl text-gray-700"></i>
            </div>
            <span className="time open-sans-font text-uppercase text-gray-500">
              2015
            </span>
            <h5 className="poppins-font text-uppercase text-lg font-bold mt-1">
              ENGINEERING DEGREE
              <span className="place open-sans-font text-gray-500 block">
                OXFORD UNIVERSITY
              </span>
            </h5>
            <p className="open-sans-font text-black">
              Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
              adipisicing elit.
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Education;


