import React, { useState, useEffect } from "react";

const images = [
  { src: "../images/rec/bg2.webp" },
  { src: "../images/rec/utp2.webp" },
  { src: "../images/rec/utp3.webp" },
  { src: "../images/rec/utp4.webp" },
  { src: "../images/rec/bg1.webp" },
  { src: "../images/rec/utp2.webp" },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const fullText = "All In One";

  // Image change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Text typing effect when component mounts or when image changes
  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === fullText.length) clearInterval(typingInterval);
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background images stacked for fade effect */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-no-repeat bg-center bg-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        ></div>
      ))}

      {/* Dynamic centered text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1
          className="font-bold transition-colors duration-1000"
          style={{
            fontSize: "10vw", 
            color: "#1e1e2f", 
          }}
        >
          {displayedText}
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
