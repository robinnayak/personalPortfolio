import React from "react";
import MemeGen from "../../assests/memegen.png";
import MovieNowHD from "../../assests/movienowhd.png";
import MySite from "../../assests/mysite.png";

export default function FeaturedSections({ bg_color }) {
  const features = [
    {
      title: "Memegen",
      description:
        "Create and share hilarious memes with our easy-to-use meme generator. Access a vast library of templates and unleash your creativity.",
      image: MemeGen, // Fixed image reference
      href: "https://memegen.robinnayak.com.np/",
      buttonText: "Start Creating Memes",
    },
    {
      title: "Moviesnowhdhub",
      description:
        "Stream your favorite movies in HD quality. Discover new releases, classics, and exclusive content all in one place.",
      image: MovieNowHD, // Fixed image reference
      href: "https://moviesnowhdhub.robinspt.com/",
      buttonText: "Browse Movies",
    },
    // Add your Google Site here
    {
      title: "My Google Site",
      description:
        "Explore more about my work and projects on my Google Site. Find additional resources and contact information.",
      image: MySite, // Replace with your Google Site thumbnail
      href: "https://robinspt.com/",
      buttonText: "Explore My Work",
    },
  ];

  return (
    <section className={`py-16 ${bg_color} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-white text-center mb-12 relative z-10">
                Featured Projects
            </h2> */}
        <h2 className="text-3xl font-bold text-white text-center mb-12 relative z-10">
          Google Live Project 
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group ${bg_color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white mb-4">{feature.description}</p>
                <a
                  href={feature.href}
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feature.buttonText} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-white/10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
    </section>
  );
}
