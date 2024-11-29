import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = ({bg_color}) => {
  return (
    <div className={`container rounded-b-2xl   max-w-full ${bg_color} relative overflow-hidden mb-5 py-8 px-4 rounded-xl`}>
      {/* Education Icon */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="bg-white p-4 rounded-full shadow-lg animate-bounce">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-dark text-4xl"
          />
        </div>
          <h1 className="text-3xl font-bold text-light">Education</h1>
      </div>

      {/* Timeline Container */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 justify-evenly">
        {/* Education Entries */}
        <div className="min-w-full flex justify-evenly md:items-start">
          {/* First Education Entry */}
          <div className="flex flex-col mt-5">
            <div className="mb-5 md:mb-0">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Delhi Public School
              </h1>
              <p className="text-light text-sm md:text-base mt-2">
                Passed Year: 2016 <span className="text-primary">10th Grade</span>
              </p>
            </div>

            {/* Second Education Entry */}
            <div className="mb-8 md:mb-0 ">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Nepal Engineering College{" "}
                
              </h1>
              <p className="text-light text-sm md:text-base mt-2">
                Passed Year: 2019-2024 <span className="text-primary">Graduated</span>
              </p>
            </div>
          </div>

          {/* Vertical Line */}
          {/* <div className="hidden md:block relative"> */}
          <div className="">
            <div className="transform -translate-x-1/2 w-2 min-h-56 bg-white mx-4"></div>
          </div>

          {/* Third Education Entry */}
          <div className="mb-8 mt-5 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Mithila Institute of Technology{" "}
              
            </h1>
            <p className="text-light text-sm md:text-base mt-2">
              Passed Year: 2017-2019 <span className="text-primary">12th Grade</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
