import React from "react";

// Import images (replace with actual paths)
import aiImage from "../../assests/AI.jpg";
import dataEngImage from "../../assests/DataAnalysis.jpg";
import webDevImage from "../../assests/webdevelopment.jpg";
import blockchainImage from "../../assests/BlockChain.jpg";
import videoEditImage from "../../assests/VideoEditing.png";
import MetaVerse from "../../assests/MetaVerse.jpg";

const IntrestedFields = ({ bg_color }) => {
  const fields = [
    {
      title: "Artificial Intelligence",
      description:
        "Exploring machine learning, deep learning, and AI-driven solutions to automate and optimize complex tasks.",
      imgSrc: aiImage,
      alt: "Robin Artificial Intelligence",
    },
    {
      title: "Data Engineering",
      description:
        "Building robust data pipelines, transforming data for analysis, and ensuring efficient data processing.",
      imgSrc: dataEngImage,
      alt: "Robin Data Engineering",
    },
    {
      title: "Web Development",
      description:
        "Creating responsive and dynamic web applications with modern frameworks like React and Django.",
      imgSrc: webDevImage,
      alt: "Robin Web Development",
    },
    {
      title: "Blockchain",
      description:
        "Learning blockchain technologies to develop secure, decentralized applications and smart contracts.",
      imgSrc: blockchainImage,
      alt: "Robin Blockchain",
    },
    {
      title: "Video Editing",
      description:
        "Crafting engaging video content using advanced editing tools for storytelling and creative expression.",
      imgSrc: videoEditImage,
      alt: "Robin Video Editing",
    },

    {
      title: "Metaverse",
      description:
        "Exploring virtual worlds and augmented reality to create immersive digital experiences and environments.",
      imgSrc: MetaVerse,
      alt: "Robin Metaverse",
    },
  ];

  return (
    <div className={`min-h-screen ${bg_color} py-10 mb-5`}>
      <h1 className="text-4xl font-bold text-center mb-8 text-light">
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] font-bold">
          Robin 
        </span>
       <pre className="inline-block"> Interested Fields</pre>  
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {fields.map((field, index) => (
          <div
            key={index}
            className={`${bg_color} shadow-lg shadow-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={field.imgSrc}
              alt={field.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-light mb-2">
                {field.title}
              </h2>
              <p className="text-light">{field.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntrestedFields;
