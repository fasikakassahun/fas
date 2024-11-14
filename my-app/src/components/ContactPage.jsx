// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaFilm } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 flex flex-col items-center space-y-6 shadow-inner">

      {/* Subscription Section */}
      <div className="text-center">
        <h2 className="text-xl font-semibold">Subscribe To Get Newsletter</h2>
        <div className="mt-4 flex items-center border rounded-full overflow-hidden shadow-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 outline-none"
          />
          <button className="bg-red-500 px-4 py-2 text-white font-semibold hover:bg-red-600 transition duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center w-full max-w-6xl px-4 md:px-0">
        {/* Brand Name with Movie Icon on the Left */}
        <div className="flex items-center space-x-2">
          {/* Movie Icon with Page Refresh on Click */}
          <FaFilm 
            className="text-red-500 cursor-pointer" 
            size={30} 
            onClick={() => window.location.reload()} 
          />
          <h1 className="text-2xl font-bold text-yellow-400 drop-shadow-[0px_0px_8px_rgba(0,0,255,1)] flex items-center">
            <span>Utopia</span>
            <span className="text-white ml-1">Cinema</span>
          </h1>
        </div>

        {/* Social Media Icons on the Right */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition duration-300">
            <FaTiktok />
          </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
