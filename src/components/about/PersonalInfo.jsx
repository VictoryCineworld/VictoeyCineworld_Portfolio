import React from "react";

const personalInfoContent = [
  { meta: " name", metaInfo: "Victory Cineworld" },
  { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Chhatrapati Sambhaji Nagar" },
  { meta: "phone", metaInfo: "+91 85548 45111" },
  { meta: "Email", metaInfo: "victorycineworld@gmail.com" },
  { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
