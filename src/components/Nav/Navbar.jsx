import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather, faLightbulb } from "@fortawesome/free-solid-svg-icons"; // Example icon
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linksname = [
    { name: "Home", path: "banner" },
    { name: "Education", path: "education" },
    { name: "Skills", path: "skills" },
    // { name: "Soft Skills", path: "soft-skills" },
    { name: "Projects", path: "projects" },
    { name: "About", path: "about" },
    { name: "Interested Fields", path: "intrested-fields" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-300 to-black p-4 mb-0.5 shadow-sm shadow-white z-50">
      <div className="container flex justify-between mx-auto items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faFeather}
            size="2xl"
            className="text-light animate-bounce"
          />
          <h2 className="text-2xl font-bold text-light mx-2">Robin</h2>
        </div>

        {/* Nav Links for Larger Screens */}
        <div className="hidden md:flex space-x-6">
          {linksname.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              smooth={true}
              duration={500}
              className="text-white hover:text-yellow-400 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden text-light">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faLightbulb}
              size="2x"
              className={`text-orange-300 ${!isMenuOpen ? "animate-bounce" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div
          className={`md:hidden flex flex-col mt-4 space-y-2 bg-gradient-to-r from-blue-300 to-black p-4 rounded-lg transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          } shadow-md`}
        >
          {linksname.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              smooth={true}
              duration={500}
              className="text-light hover:text-secondary transition-all duration-300 cursor-pointer"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
