import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Banner from "./components/sections/Banner";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/sections/About";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <BrowserRouter>
          <Navbar />
          <AnimatePresence mode="wait">
            <NavApp />
          </AnimatePresence>
          <ChatBot />
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

const NavApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/banner" element={<Banner />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
