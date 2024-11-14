// // src/components/LandingPage.js
// import React from "react";
// import HomePage from "./HomePage";
// import UpcomingMovies from "./UpcomingMovies";
// import RecommendedMovies from "./RecommendedMovies";
// import PartnerCompanies from "./PartnerCompanies";
// import ContactPage from "./ContactPage";

// const LandingPage = () => {
//   return (
//     <div className="bg-gray-900 text-white">
//       <HomePage />
//       <UpcomingMovies />
//       <RecommendedMovies />
//       <PartnerCompanies />
//       <ContactPage />
//     </div>
//   );
  
// };

// export default LandingPage;


// src/components/LandingPage.js
import React from "react";
import HomePage from "./HomePage";
import UpcomingMovies from "./UpcomingMovies";
import RecommendedMovies from "./RecommendedMovies";
import PartnerCompanies from "./PartnerCompanies";
import ContactPage from "./ContactPage";

const LandingPage = ({ isDarkMode }) => {
  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} transition duration-500`}>
      <HomePage isDarkMode={isDarkMode} />
      <UpcomingMovies isDarkMode={isDarkMode} />
      <RecommendedMovies isDarkMode={isDarkMode} />
      <PartnerCompanies isDarkMode={isDarkMode} />
      <ContactPage isDarkMode={isDarkMode} />
    </div>
  );
};

export default LandingPage;
