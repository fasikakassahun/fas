import React, { useState } from "react";

const RecommendedMovies = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section className={`p-8 ${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Title and Theme Toggle */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide mb-2">Features Overview</h2>
        <p className="text-sm text-pink-500">Utopia Cinema Features</p>
        <button 
          onClick={toggleTheme} 
          className={`mt-4 p-2 rounded-full ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"}`}
          aria-label="Toggle dark/light mode"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img 
            src= "../images/rec/bg2.webp" 
            alt="Cinema illustration" 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Cinema Registration Section */}
          <div className={`p-6 border-2 rounded-lg transition-transform transform hover:scale-105 ${isDarkMode ? "border-gray-700 hover:shadow-blue-500/50" : "border-gray-300 hover:shadow-yellow-500/70"}`} 
               style={{ 
                 boxShadow: isDarkMode ? "0 8px 16px rgba(0, 123, 255, 0.5), 0 16px 32px rgba(0, 123, 255, 0.3)" : "0 8px 16px rgba(255, 215, 0, 0.5), 0 16px 32px rgba(255, 215, 0, 0.3)" 
               }}>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Cinema Registration</h3>
            <p className="text-sm leading-relaxed">
              <strong>User Registration:</strong> Cinema owners create an account with email and password.
              <br />
              <strong>Cinema Details:</strong> Add cinema name, location, contact info, and manage movie listings, showtimes, and media uploads.
            </p>
          </div>

          {/* Client Interface Section */}
          <div className={`p-6 border-2 rounded-lg transition-transform transform hover:scale-105 ${isDarkMode ? "border-gray-700 hover:shadow-blue-500/50" : "border-gray-300 hover:shadow-yellow-500/70"}`} 
               style={{ 
                 boxShadow: isDarkMode ? "0 8px 16px rgba(0, 123, 255, 0.5), 0 16px 32px rgba(0, 123, 255, 0.3)" : "0 8px 16px rgba(255, 215, 0, 0.5), 0 16px 32px rgba(255, 215, 0, 0.3)" 
               }}>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Client Interface</h3>
            <p className="text-sm leading-relaxed">
              <strong>Movie Browsing:</strong> Clients view available movies across cinemas.
              <br />
              <strong>Movie Details:</strong> Includes title, synopsis, posters, trailers, and showtimes.
              <br />
              <strong>Search and Filter:</strong> Clients can search by title or filter by genre, rating, and showtime.
            </p>
          </div>

          {/* Location-Based Cinema Search Section */}
          <div className={`p-6 border-2 rounded-lg transition-transform transform hover:scale-105 ${isDarkMode ? "border-gray-700 hover:shadow-blue-500/50" : "border-gray-300 hover:shadow-yellow-500/70"}`} 
               style={{ 
                 boxShadow: isDarkMode ? "0 8px 16px rgba(0, 123, 255, 0.5), 0 16px 32px rgba(0, 123, 255, 0.3)" : "0 8px 16px rgba(255, 215, 0, 0.5), 0 16px 32px rgba(255, 215, 0, 0.3)" 
               }}>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Location-Based Cinema Search</h3>
            <p className="text-sm leading-relaxed">
              <strong>Geolocation:</strong> Clients can find cinemas near them.
              <br />
              <strong>Cinema List:</strong> Shows nearby cinemas with current movies.
              <br />
              <strong>Interactive Map:</strong> Visual map to view and select cinemas by distance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedMovies;
