import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/sections/Banner";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/sections/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NavApp />
        <Footer/>
      </BrowserRouter>
    </>
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
