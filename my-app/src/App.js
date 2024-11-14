import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { FaFilm } from "react-icons/fa"; 
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import AboutUs from "./components/AboutUs";
import CinemaOwner from "./components/CinemaOwner";
import Client from "./components/Client";
import Description from "./components/Description";
import PaymentForm from "./components/PaymentForm";
import ReviewsSection from "./components/ReviewsSection";
import Home from "./components/Home";
// import Home from "./components/signup";

// Component for the Service Page, with Sidebar
const ServicePage = ({ isDarkMode }) => {
  const [currentView, setCurrentView] = useState("home");

  const renderView = () => {
    switch (currentView) {
      case "cinemaOwner":
        return <CinemaOwner isDarkMode={isDarkMode} />;
      case "client":
        return <Client isDarkMode={isDarkMode} />;
      case "description":
        return <Description isDarkMode={isDarkMode} />;
      case "paymentForm":
        return <PaymentForm isDarkMode={isDarkMode} />;
      case "reviews":
        return <ReviewsSection isDarkMode={isDarkMode} />;
      default:
        return <Home isDarkMode={isDarkMode} />;
    }
  };

  return (
    <Layout setCurrentView={setCurrentView} isDarkMode={isDarkMode}>
      {renderView()}
    </Layout>
  );
};

// Navbar component with centered links and mobile menu
const Navbar = ({ isDarkMode }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = (path) =>
    `px-3 py-1 text-lg font-bold transition duration-200 ${
      location.pathname === path ? "text-yellow-400" : isDarkMode ? "text-gray-300" : "text-black"
    } hover:text-yellow-400`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-3 flex justify-between items-center bg-[#1e1e2f] shadow-md transition duration-500 relative">
      {/* Updated Logo Section with Movie Icon and Shadowed Text, shifted right */}
      <h1 className="text-4xl p-2 flex items-center text-yellow-400 drop-shadow-[0px_0px_10px_rgba(0,0,255,1)] ml-20">
        <FaFilm className="text-red-500 mr-2" size={30} />
        <span className="font-bold text-yellow-400">Utopia</span>
        <span className="text-white font-bold ml-1">Cinema</span>
      </h1>

      {/* Centered Links (Desktop) with larger font size */}
      <div className="hidden md:flex flex-grow justify-center space-x-10">
        <Link to="/" className={navLinkClasses("/")}>Home</Link>
        <Link to="/service" className={navLinkClasses("/service")}>Service</Link>
        <Link to="/about" className={navLinkClasses("/about")}>About Us</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#1e1e2f] text-white flex flex-col items-center space-y-3 py-3 md:hidden z-50">
          <Link to="/" onClick={toggleMenu} className={navLinkClasses("/")}>Home</Link>
          <Link to="/service" onClick={toggleMenu} className={navLinkClasses("/service")}>Service</Link>
          <Link to="/about" onClick={toggleMenu} className={navLinkClasses("/about")}>About Us</Link>
        </div>
      )}
    </nav>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen transition duration-500">
        <Navbar isDarkMode={true} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage isDarkMode={true} />} />
          <Route path="/service" element={<ServicePage isDarkMode={true} />} />
          <Route path="/about" element={<AboutUs isDarkMode={true} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
