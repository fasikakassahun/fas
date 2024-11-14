import React, { useState } from 'react';
import { FaFilm, FaHome, FaTheaterMasks, FaUsers, FaInfoCircle, FaCashRegister, FaStar } from 'react-icons/fa';

const Layout = ({ setCurrentView, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeView, setActiveView] = useState("home");

  const handleViewChange = (view) => {
    setActiveView(view);
    setCurrentView(view);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 bg-[#1e1e2f] text-white shadow-lg fixed top-0 left-0 z-10 ${
          isExpanded ? 'w-60' : 'w-20'
        } h-full flex flex-col items-center py-4`}
      >
        {/* Toggle Button */}
        <button onClick={toggleSidebar} className="absolute top-5 right-4">
          <FaFilm size={30} className="text-gray-300" />
        </button>

        {/* Sidebar Icons */}
        <div className="flex flex-col space-y-6 mt-20">
          {[
            { view: "home", icon: <FaHome size={40} />, label: "Home" },
            { view: "description", icon: <FaInfoCircle size={40} />, label: "Description" },
            { view: "client", icon: <FaUsers size={40} />, label: "Client" },
            { view: "cinemaOwner", icon: <FaTheaterMasks size={40} />, label: "Cinema Owner" },
            { view: "reviews", icon: <FaStar size={40} />, label: "Reviews" },
            { view: "paymentForm", icon: <FaCashRegister size={40} />, label: "Payment" }
          ].map(({ view, icon, label }) => (
            <button
              key={view}
              onClick={() => handleViewChange(view)}
              className={`flex items-center p-4 w-full transition-all duration-300 ease-in-out ${
                activeView === view
                  ? "bg-white text-black rounded-full transform scale-110"
                  : "text-gray-300 hover:bg-gray-700 hover:scale-105"
              }`}
            >
              {icon}
              {isExpanded && <span className="ml-4 text-lg font-bold">{label}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-grow ml-[60px] sm:ml-[240px] transition-all duration-300">
        <div className="overflow-y-auto h-full p-4 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
