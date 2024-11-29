import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUsers, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const softSkills = [
  { skill: "Communication", icon: faComments },
  { skill: "Teamwork", icon: faUsers },
  { skill: "Problem Solving", icon: faLightbulb },
];

const SoftSkills = ({bg_color}) => {
  return (
    <div className={`container mx-auto mb-5 p-5 ${bg_color} rounded-lg shadow-lg max-w-full`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-light ">Soft Skills</h2>
      <div className="flex justify-around flex-wrap gap-6">
        {softSkills.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-light text-5xl mb-4">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <p className="text-lg font-medium text-light">{item.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
