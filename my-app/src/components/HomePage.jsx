import React, { useState, useEffect } from "react";
import "./HomePage.css";

const defaultBackground = "../images/img/ke1.jpg";

const movies = [
  {
    title: "ke lilitu 6 seat",
    description: "The film tells the story of friends and the terrifying events that occur throughout their vacation.",
    rating: "4",
    ratingStars: "★★★★☆",
    duration: "2h 10m",
    ageRating: "16+",
    actors: "Selam tesfaye, Marta Goytom",
    tags: ["Action", "Adventure"],
    background: "../images/img/ke1.jpg",
    trailerUrl: "./video/kelt.mp4",
  },
  {
    title: "Tizita",
    description: "A film about a lovely love tale, tension, and military love.",
    rating: "4",
    ratingStars: "★★★★☆",
    duration: "1h 50m",
    ageRating: "16+",
    actors: "Engdasew, kalkidan Tibebu",
    tags: ["Love", "Action"],
    background: "../images/img/tizita.jpg",
    trailerUrl: "./video/tizitat.mp4",
  },
  {
    title: "Affini",
    description: "An intense drama exploring complex relationships and societal expectations.",
    rating: "5",
    ratingStars: "★★★★★",
    duration: "2h 5m",
    ageRating: "16+",
    actors: "Amanuel Habtamu, Girum Ermiyas",
    tags: ["Traditional", "Drama"],
    background: "../images/img/afin1.jpg",
    trailerUrl: "./video/affinit.mp4",
  },
  {
    title: "Bale Kirar",
    description: "tell us how he is waiting for his former love to return and how a new girl enters his life to transform it.",
    rating: "4",
    ratingStars: "★★★★☆",
    duration: "2h 15m",
    ageRating: "16+",
    actors: "Engdasew, Lidya moges",
    tags: ["Musical", "Love"],
    background: "../images/img/balek.jpg",
    trailerUrl: "./video/balet.mp4",
  },
  {
    title: "Manyazewal",
    description: "Finding the murderer is the main plot point of this suspenseful murderer-finding movie.",
    rating: "3",
    ratingStars: "★★★☆☆",
    duration: "1h 45m",
    ageRating: "18+",
    actors: "Amanuel habtamu, Mamdela",
    tags: ["Scary", "Suspense"],
    background: "../images/img/man.jpg",
    trailerUrl: "./video/manyt.mp4",
  },
  {
    title: "Doka",
    description: "The film is about war and tells a family story.",
    rating: "5",
    ratingStars: "★★★★★",
    duration: "2h 20m",
    ageRating: "18+",
    actors: "Mahder Asefa",
    tags: ["War", "Family"],
    background: "../images/img/doka.jpg",
    trailerUrl: "./video/dkat.mp4",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTrailerView, setIsTrailerView] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayNow = () => {
    setIsTrailerView(true);
  };

  const handleBack = () => {
    setIsTrailerView(false);
  };

  const currentMovie = movies[currentIndex];
  const backgroundImage = currentMovie.background || defaultBackground;

  return (
    <div
      className="homepage relative min-h-screen bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

      {!isTrailerView ? (
        // Main Movie Details View
        <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left px-6 md:px-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-cinema-title tracking-wide drop-shadow-lg">
            {currentMovie.title}
          </h1>
          <div className="flex items-center space-x-4 text-cinema-details text-lg mb-2">
            <span className="text-red-600 text-2xl">{currentMovie.ratingStars}</span>
            <span className="text-gray-300">({currentMovie.rating} Viewers)</span>
            <span className="bg-gray-700 py-1 px-2 rounded-md text-gray-200 font-semibold shadow-lg">
              {currentMovie.ageRating}
            </span>
            <span className="text-gray-300">{currentMovie.duration}</span>
          </div>
          <p className="text-lg md:text-xl max-w-3xl mb-6 font-bold text-white leading-relaxed">
            {currentMovie.description}
          </p>
          <div className="flex items-start text-lg mb-6">
            <span className="text-red-600 font-semibold">Starring:</span>
            <span className="ml-2 text-white font-bold">{currentMovie.actors}</span>
          </div>
          <div className="flex items-start space-x-2 mb-10 text-lg">
            <span className="text-red-600 font-semibold">Tags:</span>
            <div className="flex flex-wrap space-x-2">
              {currentMovie.tags.map((tag, index) => (
                <span key={index} className="text-white font-bold">{tag}</span>
              ))}
            </div>
          </div>
          <button
            className="play-btn bg-red-700 hover:bg-red-800 px-10 py-4 text-2xl font-bold uppercase rounded-full shadow-xl transition-transform transform hover:scale-105 text-gray-200"
            onClick={handlePlayNow}
          >
            Play Trailer
          </button>
        </div>
      ) : (
        // Trailer View
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cinema-title">
            {currentMovie.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 font-bold text-white">
            {currentMovie.description}
          </p>
          <div className="flex items-center space-x-4 mb-8">
            <span className="bg-gray-700 py-1 px-3 rounded-md text-gray-300 font-semibold">
              Rating: {currentMovie.rating}
            </span>
            <span className="bg-gray-700 py-1 px-3 rounded-md text-gray-300 font-semibold">
              Duration: {currentMovie.duration}
            </span>
          </div>
          <iframe
            className="trailer-video mb-8"
            width="800"
            height="450"
            src={currentMovie.trailerUrl}
            title={currentMovie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            className="back-btn bg-gray-800 hover:bg-gray-700 px-8 py-3 text-xl font-bold uppercase rounded-full shadow-lg transition-transform transform hover:scale-105 text-gray-200"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
