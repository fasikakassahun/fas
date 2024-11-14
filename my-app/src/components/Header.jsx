import React from 'react';
import { FaFilm } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="p-6 flex justify-between items-center bg-gradient-to-r from-[#1e1e2f] via-[#1e1e2f] to-[#1e1e2f] shadow-lg">
      {/* Logo for Utopia Cinema Website with a movie icon */}
      <h1 className="text-5xl ml-12 p-3 rounded-lg flex items-center text-yellow-400 drop-shadow-[0px_0px_12px_rgba(0,0,255,1)]">
        <FaFilm className="text-red-500 mr-3" size={40} /> {/* Larger movie icon */}
        <span className="font-extrabold">Utopia</span>
        <span className="text-white font-extrabold ml-1">Cinema</span>
      </h1>
    </header>
  );
};

export default Header;
