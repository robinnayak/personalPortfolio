import React from "react";
import { Link } from "react-scroll";
import BannerProfile from "../../assests/upscaledimage.png";
import CV from "../../assests/CV.pdf"
const Banner = ({ bg_color }) => {
  return (
    <div className="container rounded-b-2xl min-h-[75vh] max-w-full flex justify-around flex-wrap bg-gradient-to-r from-blue-300 to-black relative overflow-hidden mb-5 items-center ">
      {/* Image with Magical Lighting Frame */}
      <div className="relative top-10">
        {/* 3D Shadow and Magical Glow */}
        <div
          className={`absolute inset-0 ${bg_color} rounded-full blur-lg opacity-75 animate-pulse -top-20 h-[250px] w-[250px]`}
        ></div>

        <img
          src={BannerProfile}
          alt="banner"
          className="relative rounded-full w-60 border-4 border-white shadow-xl p-3 transform scale-110 transition-transform duration-500 hover:scale-125 hover:rotate-3"
          style={{
            position: "relative",
            top: "-50px", // Positioning it half above the container
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>

      {/* Content side with some description */}
      <div className="z-10 px-5">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          Hi! I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            Robin Nayak
          </span>
        </h1>
        <p className="text-light text-lg md:text-xl mt-4">
          I'm a web developer passionate about turning ideas into solutions for
          real-world problems.
        </p>
        <div className="mt-10 drop-shadow-md items-center">
          <Link
            to="contact"
            className="text-light text-xl md:text-2xl font-bold border-2 rounded-full p-3 text-center  hover:bg-secondary mr-3 cursor-pointer"
            duration={500}
            smooth={true}
          >
            Contact{" "}
          </Link>
          <a
            href={CV}
            download="Robin_Nayak_CV.pdf"
            className="text-light text-xl md:text-2xl font-bold border-2 rounded-full p-3 text-center  hover:bg-secondary cursor-pointer"
          >
            Download CV{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
