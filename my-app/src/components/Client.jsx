// // ClientSection.jsx

// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Custom icon for cinemas
// const cinemaIcon = new L.Icon({
//     iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
//     iconSize: [32, 32],
// });

// // Updated cinema data array
// const cinemas = [
//     { name: "Edna Mall Cinema", address: "Edna Mall, Bole, Addis Ababa", latitude: 9.0114, longitude: 38.7669, movies: [
//         { title: "Set Atgebam", trailer: "https://www.youtube.com/embed/DNZkLByyYrU", image: "../images/upcome/u4.jpg", time: "2:00 PM" },
//         { title: "Affin", trailer: "https://www.youtube.com/embed/LciR9PUccfs", image: "../images/rec/rec4.jpg", time: "6:30 PM" }
//     ]},
//     { name: "Friendship Cinema", address: "Friendship Mall, Megenagna, Addis Ababa", latitude: 9.0175, longitude: 38.7694, movies: [
//         { title: "Ke lilitu 6 seat", trailer: "https://youtu.be/LciR9PUccfs", image: "../images/upcome/u1.jpg", time: "3:00 PM" },
//         { title: "Leba ena Leba", trailer: "https://youtu.be/YXTZ0ayT9sk?si=mm6doy-w8UVAUkmx", image: "../images/upcome/u2.jpg", time: "5:30 PM" }
//     ]},
//     { name: "Cinema Addis", address: "Addis Ababa, Bole", latitude: 9.03, longitude: 38.76, movies: [
//         { title: "Doka", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ", image: "../images/rec/rec2.jpg", time: "1:00 PM" },
//         { title: "Direder", trailer: "https://youtu.be/DNZkLByyYrU", image: "../images/upcome/u6.jpg", time: "6:00 PM" }
//     ]},
//     // New Cinemas
//     { name: "Century Cinema", address: "Addis Ababa, Piassa", latitude: 9.035, longitude: 38.755, movies: [
//         { title: "And Tarik", trailer: "https://www.youtube.com/embed/DNZkLByyYrU", image: "../images/rec/rec1.jpg", time: "4:00 PM" },
//         { title: "tizeta", trailer: "https://www.youtube.com/embed/LciR9PUccfs", image: "../images/rec/rec3.jpg", time: "6:30 PM" }
//     ]},
//     { name: "Meskel Square Cinema", address: "Meskel Square, Addis Ababa", latitude: 9.034, longitude: 38.764, movies: [
//         { title: "Affin", trailer: "https://www.youtube.com/embed/DNZkLByyYrU", image: "../images/rec/rec4.jpg", time: "5:00 PM" },
//         { title: "Bale Kirar", trailer: "https://www.youtube.com/embed/LciR9PUccfs", image: "../images/upcome/u7.jpg", time: "7:30 PM" }
//     ]}
// ];

// function Client() {
//     const [userLocation, setUserLocation] = useState(null);
//     const [selectedCinema, setSelectedCinema] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [showMore, setShowMore] = useState(false);

//     // Get user's current location
//     const getCurrentLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setUserLocation([latitude, longitude]);
//                     findNearestCinema(latitude, longitude);
//                 },
//                 (error) => alert('Error fetching location: ' + error.message)
//             );
//         } else {
//             alert('Geolocation is not supported by this browser.');
//         }
//     };

//     // Find nearest cinema to the user's location
//     const findNearestCinema = (lat, lon) => {
//         const nearest = cinemas.reduce((prev, curr) => {
//             const prevDistance = calculateDistance(lat, lon, prev.latitude, prev.longitude);
//             const currDistance = calculateDistance(lat, lon, curr.latitude, curr.longitude);
//             return currDistance < prevDistance ? curr : prev;
//         });
//         setSelectedCinema(nearest);
//     };

//     // Calculate distance between two coordinates
//     const calculateDistance = (lat1, lon1, lat2, lon2) => {
//         const R = 6371; // Radius of the Earth in km
//         const dLat = (lat2 - lat1) * Math.PI / 180;
//         const dLon = (lon2 - lon1) * Math.PI / 180;
//         const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//                   Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//                   Math.sin(dLon / 2) * Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         return R * c; // Distance in km
//     };

//     return (
//         <div className="p-6 bg-gray-900 min-h-screen text-white">
//             <h2 className="text-4xl font-bold text-center mb-6 text-purple-400">Cinema Finder</h2>

//             {/* Search Bar for Location */}
//             <div className="flex justify-center mb-6">
//                 <input
//                     type="text"
//                     placeholder="Search by Cinema Name"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="p-3 w-72 rounded-l-lg focus:outline-none text-gray-900"
//                 />
//                 <button
//                     className="px-4 py-3 bg-purple-600 rounded-r-lg text-white font-semibold hover:bg-purple-800 transition-colors"
//                     onClick={() => {
//                         const cinema = cinemas.find(cinema => cinema.name.toLowerCase().includes(searchQuery.toLowerCase()));
//                         cinema ? setSelectedCinema(cinema) : alert("Cinema not found.");
//                     }}
//                 >
//                     Search
//                 </button>
//                 <button
//                     className="ml-4 px-4 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-800 transition-colors"
//                     onClick={getCurrentLocation}
//                 >
//                     Get My Location
//                 </button>
//             </div>

//             {/* Movie List Above Map */}
//             <div className="flex flex-wrap justify-center space-x-4 mb-6">
//                 {cinemas.map((cinema, index) => (
//                     <div
//                         key={index}
//                         className="p-4 bg-gray-800 rounded-lg shadow-lg w-60 hover:bg-gray-700 transition-transform transform hover:scale-105"
//                         onClick={() => setSelectedCinema(cinema)}
//                     >
//                         <img
//                             src={cinema.movies[0].image}
//                             alt={cinema.name}
//                             className="w-full h-40 object-cover rounded-md mb-2"
//                         />
//                         <h3 className="text-lg font-semibold">{cinema.name}</h3>
//                         <p>{cinema.address}</p>
//                         <p>Show Time: {cinema.movies[0].time}</p>
//                     </div>
//                 ))}
//             </div>

//             <button
//                 onClick={() => setShowMore(!showMore)}
//                 className="mb-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded shadow-lg hover:bg-yellow-600"
//             >
//                 {showMore ? "Show Less" : "See More"}
//             </button>

//             {showMore && (
//                 <div className="flex flex-wrap justify-center space-x-4">
//                     {cinemas.flatMap(cinema => cinema.movies).map((movie, index) => (
//                         <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg w-40 mb-4">
//                             <img src={movie.image} alt={movie.title} className="w-full h-24 object-cover rounded mb-2" />
//                             <h4 className="text-sm font-semibold">{movie.title}</h4>
//                             <p>Time: {movie.time}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* Map Section botaw mekeyer alebet */}
//             <div className="flex flex-col md:flex-row justify-between items-center mt-8">
//                 <MapContainer
//                     center={[9.03, 38.76]}
//                     zoom={12}
//                     style={{ height: "400px", width: "100%", marginBottom: "1rem" }}
//                 >
//                     <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         maxZoom={19}
//                     />
//                     {userLocation && (
//                         <Marker position={userLocation}>
//                             <Popup>You are here!</Popup>
//                         </Marker>
//                     )}
//                     {cinemas.map((cinema, index) => (
//                         <Marker key={index} position={[cinema.latitude, cinema.longitude]} icon={cinemaIcon}>
//                             <Popup>
//                                 <strong>{cinema.name}</strong><br />
//                                 {cinema.address}
//                             </Popup>
//                         </Marker>
//                     ))}
//                 </MapContainer>

//                 {/* Selected Cinema Details  ke mapu padding eku mehon alebet*/}
//                 {selectedCinema && (
//                     <div className="w-full md:w-1/3 bg-white p-4 shadow-lg rounded-lg text-black mt-4 md:mt-0">
//                         <h3 className="text-xl font-semibold mb-2">{selectedCinema.name}</h3>
//                         <p className="mb-4">{selectedCinema.address}</p>
//                         <ul className="space-y-2">
//                             {selectedCinema.movies.map((movie, idx) => (
//                                 <li key={idx} className="flex items-center space-x-3">
//                                     <img
//                                         src={movie.image}
//                                         alt={movie.title}
//                                         className="w-16 h-16 object-cover rounded-md"
//                                     />
//                                     <div>
//                                         <h4 className="text-lg font-semibold">{movie.title}</h4>
//                                         <p>Show Time: {movie.time}</p>
//                                         <a
//                                             href={movie.trailer}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-blue-600 hover:underline"
//                                         >
//                                             Watch Trailer
//                                         </a>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const defaultCinemas = [
    { name: "Edna Mall Cinema", address: "Edna Mall, Bole, Addis Ababa", latitude: 9.6802,  longitude: 39.5321, movies: [
        { title: "Set Atgebam", trailer: "https://www.youtube.com/embed/DNZkLByyYrU", image: "../images/upcome/u4.jpg", time: "2:00 PM" },
        { title: "Affin", trailer: "https://www.youtube.com/embed/LciR9PUccfs", image: "../images/rec/rec4.jpg", time: "6:30 PM" }
    ]},
    { name: "Friendship Cinema", address: "Friendship Mall, Megenagna, Addis Ababa", latitude: 9.6815, longitude: 39.5350, movies: [
        { title: "Ke lilitu 6 seat", trailer: "https://youtu.be/LciR9PUccfs", image: "../images/upcome/u1.jpg", time: "3:00 PM" },
        { title: "Leba ena Leba", trailer: "https://youtu.be/YXTZ0ayT9sk?si=mm6doy-w8UVAUkmx", image: "../images/upcome/u2.jpg", time: "5:30 PM" }
    ]},
    { name: "Cinema Addis", address: "Addis Ababa, Bole", latitude: 9.03, longitude: 38.76, movies: [
        { title: "Doka", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ", image: "../images/rec/rec2.jpg", time: "1:00 PM" },
        { title: "Direder", trailer: "https://youtu.be/DNZkLByyYrU", image: "../images/upcome/u6.jpg", time: "6:00 PM" }
    ]},
    { name: "Century Cinema", address: "Addis Ababa, Piassa", latitude: 9.035, longitude: 38.755, movies: [
        { title: "And Tarik", trailer: "https://www.youtube.com/embed/DNZkLByyYrU", image: "../images/rec/rec1.jpg", time: "4:00 PM" },
        { title: "Tizeta", trailer: "https://www.youtube.com/embed/LciR9PUccfs", image: "../images/rec/rec3.jpg", time: "6:30 PM" }
    ]},
    { name: "Meskel Square Cinema", address: "Meskel Square, Addis Ababa", latitude: 9.034, longitude: 38.764, movies: [
        { title: "Affin", trailer: "https://www.youtube.com/embed/DNZkLByyYrU", image: "../images/rec/rec4.jpg", time: "5:00 PM" },
        { title: "Bale Kirar", trailer: "https://www.youtube.com/embed/LciR9PUccfs", image: "../images/upcome/u7.jpg", time: "7:30 PM" }
    ]}
];

const cinemaIcon = new L.Icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    iconSize: [32, 32],
});

function Client() {
    const [cinemas, setCinemas] = useState(defaultCinemas);
    const [userLocation, setUserLocation] = useState(null);
    const [selectedCinema, setSelectedCinema] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const fetchCinemas = async () => {
            try {
                const response = await axios.get('/api/cinemas/');
                setCinemas(response.data);
            } catch (error) {
                console.error("Error fetching cinema data:", error);
            }
        };
        fetchCinemas();
    }, []);

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([latitude, longitude]);
                    findNearestCinema(latitude, longitude);
                },
                (error) => alert('Error fetching location: ' + error.message)
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    const findNearestCinema = (lat, lon) => {
        const nearest = cinemas.reduce((prev, curr) => {
            const prevDistance = calculateDistance(lat, lon, prev.latitude, prev.longitude);
            const currDistance = calculateDistance(lat, lon, curr.latitude, curr.longitude);
            return currDistance < prevDistance ? curr : prev;
        });
        setSelectedCinema(nearest);
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} p-6 min-h-screen flex flex-col transition duration-500`}>
            <h2 className="text-4xl font-bold text-center mb-6 text-purple-400">Cinema Finder</h2>

            {/* Search Section */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search by Cinema Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`p-3 w-72 rounded-l-lg focus:outline-none ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
                />
                <button
                    className={`px-4 py-3 rounded-r-lg font-semibold transition-colors ${
                        isDarkMode ? "bg-purple-600 text-white hover:bg-purple-800" : "bg-purple-400 text-black hover:bg-purple-500"
                    }`}
                    onClick={() => {
                        const cinema = cinemas.find(cinema => cinema.name.toLowerCase().includes(searchQuery.toLowerCase()));
                        cinema ? setSelectedCinema(cinema) : alert("Cinema not found.");
                    }}
                >
                    Search
                </button>
                <button
                    className={`ml-4 px-4 py-3 rounded-lg font-semibold transition-colors ${
                        isDarkMode ? "bg-blue-600 text-white hover:bg-blue-800" : "bg-blue-300 text-black hover:bg-blue-400"
                    }`}
                    onClick={getCurrentLocation}
                >
                    Get My Location
                </button>
            </div>

            {/* Toggle button for light/dark mode */}
            <div className="flex justify-end mb-4">
                <button onClick={toggleTheme}>
                    {isDarkMode ? <SunIcon className="w-8 h-8 text-yellow-400" /> : <MoonIcon className="w-8 h-8 text-blue-900" />}
                </button>
            </div>

            {/* Top 5 Movies Section with Blue Shadow and Hover Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                {cinemas.flatMap(cinema => cinema.movies).slice(0, 5).map((movie, idx) => (
                    <div
                        key={idx}
                        className="p-4 rounded-lg text-center bg-gray-800 text-white shadow-md hover:shadow-lg transition-shadow duration-300"
                        style={{ boxShadow: '0 4px 8px rgba(0, 112, 244, 0.3)' }}
                    >
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-24 object-cover rounded-md mb-2"
                        />
                        <h4 className="text-lg font-semibold mb-1">{movie.title}</h4>
                        <a
                            href={movie.trailer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600"
                        >
                            Watch Trailer
                        </a>
                    </div>
                ))}
            </div>

            {/* Main Content: Map and Movie List Side by Side */}
            <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
                
                {/* Map Section */}
                <div className="w-full md:w-1/2">
                    <MapContainer
                        center={[9.03, 38.76]}
                        zoom={12}
                        style={{ height: "400px", width: "100%" }}
                        className="rounded-lg shadow-lg"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            maxZoom={19}
                        />
                        {userLocation && (
                            <Marker position={userLocation}>
                                <Popup>You are here!</Popup>
                            </Marker>
                        )}
                        {cinemas.map((cinema, index) => (
                            <Marker key={index} position={[cinema.latitude, cinema.longitude]} icon={cinemaIcon}>
                                <Popup>
                                    <strong>{cinema.name}</strong><br />
                                    {cinema.address}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                {/* Movie List Section */}
                <div className={`w-full md:w-1/2 p-4 shadow-lg rounded-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
                    {selectedCinema ? (
                        <>
                            <h3 className="text-xl font-semibold mb-2">{selectedCinema.name}</h3>
                            <p className="mb-4">{selectedCinema.address}</p>
                            <ul className="space-y-2">
                                {selectedCinema.movies.map((movie, idx) => (
                                    <li key={idx} className="flex items-center space-x-3">
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div>
                                            <h4 className="text-lg font-semibold">{movie.title}</h4>
                                            <p>Show Time: {movie.time}</p>
                                            <a
                                                href={movie.trailer}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Watch Trailer
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p>No cinema selected.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Client;

