import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/sections/About";
import ChatBot from "./components/ChatBot";
import AIGame from "./components/Game/AIGame";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <BrowserRouter>
          <Navbar />
          <AnimatePresence mode="wait">
            <main className="pt-16">
              <Routes>
                <Route path="/" element={
                  <>
                    <Home />
                  </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/game" element={
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                      Play with AI
                    </h1>
                    <div className="max-w-2xl mx-auto">
                      <AIGame />
                    </div>
                  </div>
                } />
              </Routes>
            </main>
          </AnimatePresence>
          <ChatBot />
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
