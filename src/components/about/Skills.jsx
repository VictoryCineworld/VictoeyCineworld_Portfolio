import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "Video Production" },
  { skillClass: "p89", skillPercent: "89", skillName: "Content Creation" },
  { skillClass: "p92", skillPercent: "92", skillName: "Corporate Video" },
  { skillClass: "p96", skillPercent: "96", skillName: "Social Media Management" },
  { skillClass: "p98", skillPercent: "98", skillName: "Film Production" },
  { skillClass: "p93", skillPercent: "93", skillName: "Documentory" },
  { skillClass: "p94", skillPercent: "94", skillName: "Digital Marketing" },
  { skillClass: "p99", skillPercent: "99", skillName: "Development" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
