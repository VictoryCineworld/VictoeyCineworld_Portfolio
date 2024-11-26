import React from "react";

const personalInfoContent = [
  { meta: " Contact Details", metaInfo: "9689896355" },
  { meta: "Connect on Mail", metaInfo: "hello@victortycineworld.com" },
  { meta: "Office Location", metaInfo: " Chh Sambhajinagar, Mumbai" },
  { meta: "Services", metaInfo: "Video Production, Content Creation, Social and Digital marketing, IT Services" },

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
