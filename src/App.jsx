import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import AIGame from './components/Game/AIGame';
import ContactForm from './components/Contact/ContactForm';
import { Link } from 'react-scroll';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`fixed w-full z-50 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Portfolio</div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="home"
              smooth={true}
              className="cursor-pointer hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="game"
              smooth={true}
              className="cursor-pointer hover:text-blue-500 transition-colors"
            >
              Game
            </Link>
            <Link
              to="contact"
              smooth={true}
              className="cursor-pointer hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
              }`}
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <section id="home">
              <Home />
            </section>

            <section id="game" className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Try the AI Game!
                </h2>
                <AIGame />
              </div>
            </section>

            <section id="contact" className="py-16">
              <div className="container mx-auto px-4">
                <ContactForm />
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
