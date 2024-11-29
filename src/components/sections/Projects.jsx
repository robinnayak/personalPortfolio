import React, { useState } from "react";

const projects = [
  {
    title: "Group Portfolio Website",
    description:
      "Developed a platform to showcase team portfolios, enabling companies to hire teams based on expertise, which led to a 15% increase in client engagement.",
    technologies: "Visual Studio Code, ReactJS, HTML, CSS",
    link: "https://portfolio-b0743.web.app/",
    github: "robinnayak/portfolio",
  },
  {
    title: "Granny’s n Mom’s Kitchen (Online Food Delivery with Machine Learning)",
    description:
      "Contributed to building an online platform connecting home-based cooks with customers, integrating machine learning for personalized meal recommendations.",
    technologies: "Django, ReactJS, Redux Toolkit, Python, Scikit-learn",
    link: "#",
    github: "robinnayak/granny-kitchen",
  },
  {
    title: "Room Rent Finder for Kathmandu (RoomRentNepal)",
    description:
      "Built a web platform for room rentals, with map integration for location sharing.",
    technologies: "ReactJS, Django",
    deployed: "RoomRentNepal",
    github: "robinnayak/rentlink-frontend",
    link: "https://www.roomrentnepal.site/",
  },
  {
    title: "UI Site for Summit Hospital",
    description:
      "Developed a basic website for Summit Hospital, showcasing services, doctor information, and fees.",
    technologies: "ReactJS",
    deployed: "Summit Hospital",
    github: "robinnayak/hospital",
    link: "https://summit-hospital.vercel.app/",
  },
  {
    title: "Disha (Final Year Project)",
    description:
      "Built a mobile app for vehicle booking with seat reservation, navigation, and passenger tracking features.",
    technologies: "React Native, Node.js, Firebase",
    github: "robinnayak/disha-frontend",
    link: "#",
  },
];

const Projects = ({ bg_color }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`container mx-auto mb-5 p-5 ${bg_color} rounded-lg shadow-lg max-w-full`}>
      <h2 className="text-3xl font-bold text-center mb-8 text-light">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group ${bg_color} rounded-lg shadow-md shadow-light overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer`}
            onClick={() => setSelectedProject(index)}
          >
            <div className="p-5">
              <h3 className="text-xl font-semibold text-light mb-2">{project.title}</h3>
              <hr className="border-b border-light mb-2" />
              <p className="text-light line-clamp-2">{project.description}</p>
              <p className="text-light mt-2 font-medium">
                Technologies: {project.technologies}
              </p>
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-5 transition-opacity duration-500 ease-in-out"
              style={{ zIndex: 1 }}
            >
              <p>{project.description}</p>
              <div className="mt-3 flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Deployed
                  </a>
                )}
                {project.github && (
                  <a
                    href={`https://github.com/${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {selectedProject !== null && (
        <div
          className="backdrop-blur-sm bg-gray-800 bg-opacity-30 fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl">
            <h3 className="text-2xl font-bold mb-4">
              {projects[selectedProject]?.title}
            </h3>
            <p className="text-gray-600 mb-4">{projects[selectedProject]?.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Projects;
