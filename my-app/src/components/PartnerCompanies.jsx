// src/components/PartnerCompanies.js
import React, { useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const movies = [
  {
    title: "Hidar",
    description: "Finding the murderer is the main plot point of this suspenseful murderer-finding movie.",
    rating: "5",
    duration: "2h 15m",
    background: "../images/img/hidar.jpg",
    trailerUrl: "./video/waiter.mp4",
  },
  {
    title: "ke lilitu 6 seat",
    description: "The film tells the story of friends and the terrifying events that occur throughout their vacation.",
    rating: "5",
    duration: "2h 15m",
    background: "../images/img/ke2.jpg",
    trailerUrl: "./video/waiter.mp4",
  },
  {
    title: "And Tarik",
    description: "A sci-fi adventure exploring the boundaries of technology and humanity.",
    rating: "5",
    duration: "2h 20m",
    background: "../images/img/and.jpg",
    trailerUrl: "./video/waiter.mp4",
  },
  {
    title: "Wedaj",
    description: "Comedy at its finest, guaranteed to make you laugh till your stomach hurts.",
    rating: "5",
    duration: "1h 45m",
    background: "../images/img/wedaj.jpg",
    trailerUrl: "./video/waiter.mp4",
  },
  {
    title: "Doka",
    description: "The film is about war and tells a family story.",
    rating: "5",
    duration: "2h 10m",
    background: "../images/img/doka.jpg",
    trailerUrl: "./video/waiter.mp4",
  },
  {
    
    title: "Manyazewal",
    description: "Finding the murderer is the main plot point of this suspenseful murderer-finding movie.",
    rating: "5",
    duration: "1h 50m",
    background:"../images/img/man.jpg",
    trailerUrl: "./video/waiter.mp4",
  },
  {
    title: "Tizita",
    description: "A film about a lovely love tale, tension, and military love.",
    rating: "5",
    duration: "2h 5m",
    background: "../images/img/tizita.jpg",
    trailerUrl: "./video/waiter.mp4",
  },
 
  {
    title: "Affin",
    description: "An intense drama exploring complex relationships and societal expectations.",
    rating: "5",
    duration: "1h 45m",
    background: "../images/img/afin1.jpg",
    trailerUrl: "./video/waiter.mp4",
  },
  {
    title: "Bale Kirar",
    description: "tell us how he is waiting for his former love to return and how a new girl enters his life to transform it.",
    rating: "5",
    duration: "2h 5m",
    background: "../images/img/balek.jpg",
    trailerUrl: "./video/waiter.mp4",
  },
];

const PartnerCompanies = () => {
  const [showAll, setShowAll] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'} min-h-screen p-6 transition-all duration-500`}>
      {/* Theme Toggle */}
      <div className="flex justify-end p-4">
        <button onClick={toggleTheme} className="focus:outline-none">
          {isDarkMode ? (
            <SunIcon className="w-8 h-8 text-yellow-400" />
          ) : (
            <MoonIcon className="w-8 h-8 text-blue-900" />
          )}
        </button>
      </div>

      {/* Higher Rating Movies Section */}
      <section className="pt-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-white shadow-lg shadow-purple-500' : 'text-black shadow-lg shadow-pink-500'}`}>
            Higher Rating Movies
          </h2>
          <button
            onClick={handleViewAll}
            className="text-red-500 hover:underline text-lg"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

        {/* Movie List */}
        <div className="flex justify-center">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            {(showAll ? movies : movies.slice(0, 3)).map((movie, index) => (
              <div
                key={index}
                className={`shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 h-96 w-96 hover:scale-105 ${
                  isDarkMode ? 'shadow-purple-500' : 'shadow-pink-400'
                } hover:shadow-yellow-500`}
                style={{
                  backgroundImage: `url(${movie.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col justify-between h-full p-6 text-white bg-opacity-60">
                  <div>
                    <h3 className="text-2xl font-semibold">{movie.title}</h3>
                    <p className="text-sm text-gray-300">{movie.duration}</p>
                    <p className="text-yellow-400">Rating: {movie.rating}</p>
                  </div>
                  <button
                    onClick={() => window.open(movie.trailerUrl, "_blank")}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex items-center justify-center transition duration-200"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerCompanies;
