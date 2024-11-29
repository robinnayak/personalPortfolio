import React from "react";

const skills = [
  { category: "Web Development", skills: ["JavaScript", "HTML", "CSS"] },
  { category: "Web Frameworks", skills: ["Django", "ReactJS"] },

];

const skillLevels = {
  "C++": 45,
  Python: 60,
  C: 75,
  JavaScript: 60,
  HTML: 70,
  CSS: 60,
  ReactJS: 65,
  Django: 70,
  "Redux Toolkit": 30,
  "Tailwind CSS": 55,
  "Styled Components": 60,
  MySQL: 70,
  Git: 65,
  GitHub: 70,
};

const Skills = ({bg_color}) => {
  return (
    <div className={`container mx-auto mb-5 p-5 ${bg_color} rounded-lg shadow-lg max-w-full`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-light">Technical Skills</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-light mb-4">{skillCategory.category}</h3>
          <div className="space-y-4">
            {skillCategory.skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between">
                  <span className="text-light">{skill}</span>
                  <span className="text-light text-sm">{skillLevels[skill]}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${skillLevels[skill]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
