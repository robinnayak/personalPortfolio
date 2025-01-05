import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linksname = [
    { name: "Home", path: "banner" },
    { name: "Education", path: "education" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "About", path: "about" },
    { name: "Interested Fields", path: "intrested-fields" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon
              icon={faFeather}
              className="h-6 w-6 text-primary-500 dark:text-primary-400"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Robin</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {linksname.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? "border-t dark:border-gray-700" : ""}`}
        >
          <div className="py-3 space-y-3">
            {linksname.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
