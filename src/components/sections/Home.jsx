import React from "react";

import Banner from "./Banner";
import Education from "./Education";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import FeaturedSections from "./Feature";

const Home = () => {
  const bg_color_for_tailwind = "bg-gradient-to-r from-blue-300 to-black";
  return (
    <>
      <div id="banner">
        <Banner bg_color={bg_color_for_tailwind} />
      </div>
      <div id="education">
        <Education bg_color={bg_color_for_tailwind} />
      </div>
      <div id="skills">
        <Skills bg_color={bg_color_for_tailwind} />
      </div>
      <div className="mb-5" id="featured-sections">
        <FeaturedSections bg_color={bg_color_for_tailwind} />
      </div>
      <div id="soft-skills">
        <SoftSkills bg_color={bg_color_for_tailwind} />
      </div>
      <div id="projects">
        <Projects bg_color={bg_color_for_tailwind} />
      </div>
      <div id="about">
        <About bg_color={bg_color_for_tailwind} />
      </div>

      <div id="contact">
        <Contact bg_color={bg_color_for_tailwind} />
      </div>
    </>
  );
};

export default Home;
