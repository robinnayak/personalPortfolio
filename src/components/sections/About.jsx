import React from "react";
import AboutProfile from "../../assests/imageflip.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"; // Import FontAwesome brand icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome solid icons

const About = ({ bg_color }) => {
  return (
    <div className={` ${bg_color} flex justify-center items-center mb-5`}>
      <div
        className={`mx-auto ${bg_color} shadow-lg p-8 rounded-lg md:flex md:gap-8`}
      >
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="relative">
            <img
              src={AboutProfile}
              alt="Robin Nayak"
              className="w-64 h-80 object-cover rounded-lg border-4 border-gray-200 shadow-lg shadow-white"
            />
            <div className="absolute inset-0 border-8 border-blue-400 rounded-lg -z-10 top-2 left-2"></div>
          </div>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4 text-light">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] font-bold">
              Robin Nayak
            </span>
          </h1>
          <p className="text-light mb-4">
            Hello! I’m <strong>Robin Nayak</strong>, a passionate Software
            Developer based in Sanga, Kavrepalanchok, Nepal. I recently
            graduated with a Bachelor of Science in Computer Engineering and
            have a strong background in web development, machine learning, and
            software engineering.
          </p>
          <p className="text-light mb-4">
            Over the years, I have worked on various exciting projects,
            including <em>Granny’s n Mom’s Kitchen</em> and
            <em>Room Rent Finder for Kathmandu</em>. These experiences have
            helped me grow as a developer and refine my problem-solving and
            teamwork skills.
          </p>
          <p className="text-light mb-4">
            Feel free to check out my work on
            <a
              href="https://github.com/robinnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {" "}
              GitHub{" "}
            </a>
            or connect with me on
            <a
              href="https://www.linkedin.com/in/robin-nayak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {" "}
              LinkedIn
            </a>
            .
          </p>
          <p className="text-light mb-4">
            You can also contact me directly via{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=robinnayak86@gmail.com"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>{" "}
            or WhatsApp:
            <a
              href="https://wa.me/9779815823670"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-semibold"
            >
              {" "}
              +977 9815823670
            </a>
            .
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/robinnayak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faGithub} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/robin-nayak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </a>
            <a
              href="https://wa.me/9779815823670"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:text-green-600"
            >
              <FontAwesomeIcon icon={faWhatsapp} color="white" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=robinnayak86@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:text-red-600"
            >
              <FontAwesomeIcon icon={faEnvelope} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
