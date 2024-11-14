
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
/* global google */

const cinemas = [
    {
        name: "Edna Mall Cinema",
        address: "Edna Mall, Bole, Addis Ababa",
        latitude: 9.0114,
        longitude: 38.7669,
        description: "Located in the vibrant heart of Bole, Edna Mall Cinema offers a luxurious cinema experience with state-of-the-art facilities. Known for hosting the latest blockbusters, it's a favorite for movie-goers looking for a premium experience.",
        image: "../images/upcome/edna2.jpg"
    },
    {
        name: "Friendship Cinema",
        address: "Friendship Mall, Megenagna, Addis Ababa",
        latitude: 9.0175,
        longitude: 38.7694,
        description: "Friendship Cinema in Megenagna provides a cozy yet contemporary atmosphere, perfect for family outings or a casual evening with friends. Expect a curated selection of popular films from various genres.",
        image: "../images/upcome/ff2.webp"
    },
    {
        name: "Cinema Addis",
        address: "Addis Ababa, Bole",
        latitude: 9.03,
        longitude: 38.76,
        description: "Cinema Addis, located in Bole, is renowned for its comfortable seating and high-quality sound system, ensuring every film is an immersive experience. This cinema is a go-to spot for film enthusiasts.",
        image: "../images/upcome/alam.png"
    },
    {
        name: "Century Cinema",
        address: "Piassa, Addis Ababa",
        latitude: 9.035,
        longitude: 38.755,
        description: "Century Cinema in Piassa brings a blend of old-world charm and modern cinema, offering an ambiance that is as unique as its location. A perfect choice for those who appreciate both heritage and entertainment.",
        image: "../images/upcome/century.webp"
    },
    {
        name: "Meskel Square Cinema",
        address: "Meskel Square, Addis Ababa",
        latitude: 9.034,
        longitude: 38.764,
        description: "Meskel Square Cinema is situated in a bustling part of the city and is known for its lively atmosphere and diverse movie lineup, attracting both locals and tourists looking for a true Addis Ababa experience.",
        image: "../images/upcome/meskel-square.jpg"
    },
    {
        name: "Adot Cinema",
        address: "Bisrate gebrel, Addis Ababa",
        latitude: 9.034,
        longitude: 38.764,
        description: "Adot Cinema is situated in a bustling part of the city and is known for its lively atmosphere and diverse movie lineup, attracting both locals and tourists looking for a true Addis Ababa experience.",
        image: "../images/upcome/adot.jpg"
    }
];


const About = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDescription = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Load Google Translate
    useEffect(() => {
        const addGoogleTranslate = () => {
            if (!document.querySelector('#google-translate-script')) {
                const script = document.createElement('script');
                script.id = 'google-translate-script';
                script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
                document.body.appendChild(script);
            }
    
            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en', // Default language is set to English
                        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Simple dropdown layout
                        autoDisplay: false // Don't automatically display the translation
                    },
                    'google_translate_element'
                );
            };
        };
        addGoogleTranslate();
    }, []);
    

    return (
        <div className={`${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'} min-h-screen flex flex-col items-center p-8 transition duration-500`}>
            <div className="w-full max-w-5xl p-4 bg-opacity-90 rounded-lg shadow-lg" style={{ backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff' }}>

                {/* Google Translate Dropdown */}
                <div id="google_translate_element" className="absolute top-4 left-4"></div>

                {/* Theme Toggle Icon */}
                <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleTheme}>
                    {isDarkMode ? (
                        <SunIcon className="w-8 h-8 text-yellow-400" />
                    ) : (
                        <MoonIcon className="w-8 h-8 text-yellow-400" />
                    )}
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-yellow-400' : 'text-[#d4af37]'}`}>About Utopia Cinema</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: isDarkMode ? '#e5e7eb' : '#374151' }}>
                        Welcome to Utopia Cinema – where cinema meets elegance. We partner with the finest cinemas across Addis Ababa to bring you an exceptional movie experience. Discover our partner cinemas below.
                    </p>
                </div>

                {/* Cinema List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cinemas.map((cinema, index) => (
                        <div
                            key={index}
                            className={`rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 hover:shadow-yellow-500' : 'bg-gray-100 hover:shadow-[#d4af37]'}`}
                        >
                            <img src={cinema.image} alt={cinema.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <button
                                    onClick={() => toggleDescription(index)}
                                    className="w-full text-left font-semibold text-xl flex justify-between items-center"
                                    style={{ color: isDarkMode ? '#e5e7eb' : '#4a5568' }}
                                >
                                    <span>{cinema.name}</span>
                                    <svg
                                        className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {activeIndex === index && (
                                    <div className="mt-4" style={{ color: isDarkMode ? '#d1d5db' : '#2d3748' }}>
                                        <p>{cinema.description}</p>
                                        <p className="mt-2 text-sm" style={{ color: isDarkMode ? '#ecc94b' : '#d4af37' }}>{cinema.address}</p>
                                        <a
                                            href={`https://www.google.com/maps?q=${cinema.latitude},${cinema.longitude}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-yellow-500 mt-2 inline-block"
                                            style={{ color: isDarkMode ? '#63b3ed' : '#b8860b' }}
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
