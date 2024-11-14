import React, { useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Description = () => {
  const [showVideo, setShowVideo] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleShowVideo = (videoPath) => {
    setShowVideo(videoPath);
  };

  const handleCloseVideo = () => {
    setShowVideo(null);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen flex flex-col p-10 transition duration-500`}>
      {/* Theme Toggle Button */}
      <div className="flex justify-end">
        <button onClick={toggleTheme} className="mb-4">
          {isDarkMode ? (
            <SunIcon className="w-8 h-8 text-yellow-400" />
          ) : (
            <MoonIcon className="w-8 h-8 text-blue-900" />
          )}
        </button>
      </div>

      {/* Page Title */}
      <h1 className={`text-5xl font-bold text-center mb-14 ${isDarkMode ? "text-yellow-400" : "text-black"}`}>
        Welcome to Our Cinema
      </h1>

      <div className="description-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-10">
        {/* Card for Clients */}
        <div className={`${isDarkMode ? "bg-gradient-to-br from-yellow-500 to-orange-600" : "bg-gradient-to-br from-yellow-200 to-orange-300"} p-8 rounded-2xl shadow-lg transition-shadow duration-300 text-center hover:shadow-2xl hover:shadow-blue-500/100`}>
          <h2 className={`${isDarkMode ? "text-gray-900" : "text-gray-800"} text-3xl font-semibold mb-4`}>Client</h2>
          <p className="text-lg mb-6">
            Buy tickets or access services easily with just a few clicks. Browse movies, choose seats, and make payments seamlessly.
          </p>
          <button
            className="mt-5 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            onClick={() => handleShowVideo("./video/waiter.mp4")}
          >
            See More
          </button>
        </div>

        {/* Card for Cinema Owners */}
        <div className={`${isDarkMode ? "bg-gradient-to-br from-blue-500 to-indigo-600" : "bg-gradient-to-br from-blue-200 to-indigo-300"} p-8 rounded-2xl shadow-lg transition-shadow duration-300 text-center hover:shadow-2xl hover:shadow-blue-500/100`}>
          <h2 className={`${isDarkMode ? "text-gray-900" : "text-gray-800"} text-3xl font-semibold mb-4`}>For Cinema Owners</h2>
          <p className="text-lg mb-6">
            Register your cinema, manage screenings, and set up pricing. We provide tools to efficiently handle your cinema operations.
          </p>
          <button
            className="mt-5 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            onClick={() => handleShowVideo("../video/rec/rec3.mp4")}
          >
            See More
          </button>
        </div>

        {/* Card for Payment System */}
        <div className={`${isDarkMode ? "bg-gradient-to-br from-purple-500 to-pink-600" : "bg-gradient-to-br from-purple-200 to-pink-300"} p-8 rounded-2xl shadow-lg transition-shadow duration-300 text-center hover:shadow-2xl hover:shadow-blue-500/100`}>
          <h2 className={`${isDarkMode ? "text-gray-900" : "text-gray-800"} text-3xl font-semibold mb-4`}>Payment System</h2>
          <p className="text-lg mb-6">
            We offer secure and fast payment options. Pay with cards, PayPal, or other methods, and receive instant confirmations.
          </p>
          <button
            className="mt-5 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            onClick={() => handleShowVideo("../video/rec/rec3.mp4")}
          >
            See More
          </button>
        </div>
      </div>

      {/* Video Modal for Full-Screen Display */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center"
          onClick={handleCloseVideo}
        >
          <div
            className="relative w-full max-w-4xl h-auto"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking video area
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-gray-700 rounded-full p-2 hover:bg-gray-900"
              onClick={handleCloseVideo}
            >
              &times;
            </button>
            <video
              src={showVideo}
              controls
              className="w-full h-[60vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
