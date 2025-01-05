import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
      id="home"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Frontend Developer | React Specialist | UI/UX Enthusiast
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
