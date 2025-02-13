import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import BannerProfile from "../../assests/upscaledimage.png";
import CV from "../../assests/CV.pdf";
import SitePreview from "../../assests/mysite.png";

const Banner = ({ bg_color }) => {
  return (
    <div className="container rounded-b-2xl min-h-[75vh] max-w-full flex justify-around flex-wrap bg-gradient-to-r from-blue-300 to-black relative overflow-hidden mb-5 items-center">
      {/* Interactive Website Preview */}
      <div className="relative group mx-4 my-8 hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300 -rotate-1 scale-105"></div>
        <a
          href="https://robinspt.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-white transform rotate-1 hover:rotate-0 transition-all duration-300"
        >
          <img
            src={SitePreview}
            alt="RobinSPT Website Preview"
            className="w-72 h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <span className="text-white font-bold text-lg drop-shadow-md">
              Visit My Portfolio ↗
            </span>
          </div>
        </a>
      </div>

      {/* Image with Magical Lighting Frame */}
      <div className="relative top-10">
        <div
          className={`absolute inset-0 ${bg_color} rounded-full blur-lg opacity-75 animate-pulse -top-20 h-[250px] w-[250px]`}
        ></div>
        <img
          src={BannerProfile}
          alt="banner"
          className="relative rounded-full w-60 border-4 border-white shadow-xl p-3 transform scale-110 transition-transform duration-500 hover:scale-125 hover:rotate-3"
          style={{
            position: "relative",
            top: "-50px",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>

      {/* Content side with description and links */}
      <div className="z-10 px-5">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          Hi! I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            Robin Nayak
          </span>
        </h1>
        <p className="text-light text-lg md:text-xl mt-4 max-w-md">
          Crafting digital experiences through innovative web solutions. Explore
          my
          <a
            href="https://robinspt.com/"
            className="text-blue-200 hover:text-white underline ml-1 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            live portfolio
          </a>
          to see my work in action.
        </p>

        {/* Action Buttons and Social Links */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center space-x-4">
            <Link
              to="contact"
              className="text-light text-xl md:text-2xl font-bold border-2 rounded-full px-6 py-3 hover:bg-blue-600 cursor-pointer transition-all hover:border-blue-600"
              duration={500}
              smooth={true}
            >
              Contact
            </Link>
            <a
              href={CV}
              download="Robin_Nayak_CV.pdf"
              className="text-light text-xl md:text-2xl font-bold border-2 rounded-full px-6 py-3 hover:bg-purple-600 cursor-pointer transition-all hover:border-purple-600"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/robin-nayak-1093371b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7" />
            </a>
            <a
              href="https://github.com/robinnayak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
            </a>
            <a
              href="https://wa.me/+9779815823670"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
