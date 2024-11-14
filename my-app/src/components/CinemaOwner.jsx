// import React, { useState } from 'react';
// import axios from 'axios';

// // SignIn Component
// const SignIn = ({ onSignIn, onNavigateToSignUp }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

 

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
//       <div className="bg-opacity-70 bg-black p-10 rounded-lg shadow-lg max-w-md w-full text-center">
//         <h1 className="text-4xl font-bold text-yellow-400 mb-6">Sign In</h1>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />
//         {error && <div className="text-red-500 mb-4">{error}</div>}

//         <button
//           onClick={handleSignIn}
//           className="w-full p-3 bg-pink-600 rounded text-white font-semibold hover:bg-pink-700"
//         >
//           Sign In
//         </button>

//         <p className="mt-6 text-sm">
//           New to Utopia Cinema?{' '}
//           <button onClick={onNavigateToSignUp} className="text-yellow-400 font-semibold hover:underline">
//             Sign Up Now
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// // SignUp Component
// const SignUp = ({ onNavigateToSignIn }) => {
//   const [cinemaName, setCinemaName] = useState('');
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSignUp = async () => {
//     try {
//       await axios.post('https://your-backend.com/api/auth/register', {
//         cinemaName,
//         latitude,
//         longitude,
//         email,
//         password,
//       });
//       setError('');
//       setSuccess('Account created successfully. You can now sign in.');
//     } catch (err) {
//       setError('Failed to create account. Please check your information.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
//       <div className="bg-opacity-70 bg-black p-10 rounded-lg shadow-lg max-w-md w-full text-center">
//         <h1 className="text-4xl font-bold text-yellow-400 mb-6">Sign Up</h1>

//         <input
//           type="text"
//           placeholder="Cinema Name"
//           value={cinemaName}
//           onChange={(e) => setCinemaName(e.target.value)}
//           className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />
//         <input
//           type="text"
//           placeholder="Latitude"
//           value={latitude}
//           onChange={(e) => setLatitude(e.target.value)}
//           className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />
//         <input
//           type="text"
//           placeholder="Longitude"
//           value={longitude}
//           onChange={(e) => setLongitude(e.target.value)}
//           className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         {success && <div className="text-green-500 mb-4">{success}</div>}

//         <button
//           onClick={handleSignUp}
//           className="w-full p-3 bg-green-600 rounded text-white font-semibold hover:bg-green-700"
//         >
//           Sign Up
//         </button>

//         <p className="mt-6 text-sm">
//           Already have an account?{' '}
//           <button onClick={onNavigateToSignIn} className="text-yellow-400 font-semibold hover:underline">
//             Sign In
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };


// // CinemaDashboard Component
// const CinemaDashboard = () => {
//   const [movies, setMovies] = useState([
//     { title: 'Kelelitu 6 Seat', time: '2024-11-01T14:00', description: 'A horror movie', poster: '../images/upcome/u1.jpg', trailer: 'https://www.youtube.com/embed/DNZkLByyYrU' },
//     { title: 'Tizita', time: '2024-11-01T16:30', description: 'A suspenseful love movie', poster: '../images/rec/rec3.jpg', trailer: 'https://www.youtube.com/embed/DNZkLByyYrU' },
//   ]);

//   const [newMovie, setNewMovie] = useState({
//     title: '',
//     time: '',
//     description: '',
//     trailer: '',
//     poster: '',
//   });

//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isAdded, setIsAdded] = useState(false);
//   const [errorFields, setErrorFields] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMovie((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name } = e.target;
//     const file = e.target.files[0];

//     if (file) {
//       const fileURL = URL.createObjectURL(file);
//       setNewMovie((prev) => ({
//         ...prev,
//         [name]: fileURL,
//       }));

//       // Simulate upload progress
//       setUploadProgress(0);
//       const interval = setInterval(() => {
//         setUploadProgress((progress) => {
//           if (progress >= 100) {
//             clearInterval(interval);
//             return 100;
//           }
//           return progress + 10;
//         });
//       }, 200);
//     }
//   };

//   const addMovie = () => {
//     const requiredFields = ['title', 'time', 'description', 'trailer', 'poster'];
//     const missingFields = requiredFields.filter((field) => !newMovie[field]);

//     if (missingFields.length > 0) {
//       setErrorFields(missingFields);
//       setIsAdded(false);
//     } else {
//       setMovies((prev) => [newMovie, ...prev]);
//       setNewMovie({ title: '', time: '', description: '', trailer: '', poster: '' });
//       setErrorFields([]);
//       setIsAdded(true);
//       setTimeout(() => setIsAdded(false), 2000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-8 rounded-lg shadow-lg flex flex-col max-w-full mx-auto">
//       <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8 glow">
//         Cinema Dashboard
//       </h1>

//       {/* Cinema Info */}
//       <div className="text-center mb-8">
//         <h2 className="text-2xl font-semibold text-pink-300">Cinema Name: Alem Cinema</h2>
//         <p className="text-lg text-blue-200">Location: Bole Addis Ababa</p>
//       </div>

//       {/* Movies Section */}
//       <div className="mb-8">
//         <h3 className="text-3xl font-semibold text-pink-400 mb-4">Today's Shows</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {movies.map((movie, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//             >
//               <img
//                 src={movie.poster}
//                 alt={movie.title}
//                 className="w-full h-56 object-cover bg-black"
//               />
//               <div className="p-4">
//                 <h4 className="text-2xl font-semibold text-yellow-300">{movie.title}</h4>
//                 <p className="text-lg text-pink-200">Showtime: {new Date(movie.time).toLocaleString()}</p>
//                 <p className="text-sm text-gray-400 mt-2">{movie.description}</p>
//                 {movie.trailer && (
//                   <div className="mt-4">
//                     <video
//                       controls
//                       src={movie.trailer}
//                       className="w-full h-40 rounded-lg shadow-lg object-cover"
//                     ></video>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* New Movie Form */}
//       <div className="mb-8">
//         <h3 className="text-2xl font-semibold text-pink-400 mb-4">Add New Movie</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="title"
//             value={newMovie.title}
//             onChange={handleInputChange}
//             placeholder="Movie Title"
//             className={`border p-2 rounded w-full text-gray-800 focus:border-pink-400 ${
//               errorFields.includes('title') ? 'border-red-500' : 'border-gray-700'
//             }`}
//           />
//           <input
//             type="datetime-local"
//             name="time"
//             value={newMovie.time}
//             onChange={handleInputChange}
//             className={`border p-2 rounded w-full text-gray-800 focus:border-pink-400 ${
//               errorFields.includes('time') ? 'border-red-500' : 'border-gray-700'
//             }`}
//           />
//         </div>

//         {/* Description Row */}
//         <textarea
//           name="description"
//           value={newMovie.description}
//           onChange={handleInputChange}
//           placeholder="Movie Description"
//           className={`border p-2 rounded w-full text-gray-800 mt-4 focus:border-pink-400 ${
//             errorFields.includes('description') ? 'border-red-500' : 'border-gray-700'
//           }`}
//         ></textarea>

//         {/* Upload Buttons in One Row */}
//         <div className="grid grid-cols-2 gap-4 mt-4">
//           <label className="flex items-center justify-center bg-pink-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-pink-700 shadow-lg">
//             Upload Movie Image
//             <input
//               type="file"
//               accept="image/*"
//               name="poster"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </label>
//           <label className="flex items-center justify-center bg-purple-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-purple-700 shadow-lg">
//             Upload Movie Trailer
//             <input
//               type="file"
//               accept="video/*"
//               name="trailer"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </label>
//         </div>

//         {uploadProgress > 0 && uploadProgress < 100 && (
//           <div className="mt-2">
//             <div className="w-full bg-gray-300 rounded-full">
//               <div
//                 className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
//                 style={{ width: `${uploadProgress}%` }}
//               >
//                 {uploadProgress}%
//               </div>
//             </div>
//           </div>
//         )}

//         <button
//           onClick={addMovie}
//           className="mt-4 px-4 py-2 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-md"
//         >
//           Add Movie
//         </button>

//         {/* Success and Error Messages */}
//         {isAdded && (
//           <div className="mt-4 p-2 bg-green-100 text-green-700 rounded shadow-md">
//             Movie added successfully!
//           </div>
//         )}
//         {errorFields.length > 0 && (
//           <div className="mt-4 p-2 bg-red-100 text-red-700 rounded shadow-md">
//             Please fill in all required fields.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

//   return (
//     <>
//       {isSignedIn ? (
//         <CinemaDashboard />
//       ) : showSignUp ? (
//         <SignUp onNavigateToSignIn={() => setShowSignUp(false)} />
//       ) : (
//         <SignIn onSignIn={() => setIsSignedIn(true)} onNavigateToSignUp={() => setShowSignUp(true)} />
//       )}
//     </>
//   );
// };

// export default App;




// import React, { useState } from 'react';
// import axios from 'axios';

// const CinemaOwner = () => {
//   // State for registration and login form data
//   const [registerData, setRegisterData] = useState({
//     email: '',
//     password: '',
//     cinema_name: '',
//     latitude: '',
//     longitude: '',
//   });
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   // State for storing the JWT token
//   const [token, setToken] = useState('');

//   // State for adding movies
//   const [movieData, setMovieData] = useState({
//     title: '',
//     time: '',
//     description: '',
//     trailer: '',
//     poster: '',
//   });

//   // Handle change for input fields
//   const handleInputChange = (e, setData) => {
//     setData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // Register a cinema owner
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/api/auth/register/', registerData);
//       alert('Registration successful!');
//     } catch (error) {
//       console.error('Registration error:', error.response.data);
//       alert('Registration failed!');
//     }
//   };

//   // Login a cinema owner
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/api/auth/login/', loginData);
//       setToken(response.data.access); // Save the JWT token
//       alert('Login successful!');
//     } catch (error) {
//       console.error('Login error:', error.response.data);
//       alert('Login failed!');
//     }
//   };

//   // Add a new movie
//   const handleAddMovie = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:8000/api/auth/movies/',
//         movieData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert('Movie added successfully!');
//     } catch (error) {
//       console.error('Add movie error:', error.response.data);
//       alert('Failed to add movie!');
//     }
//   };

//   return (
//     <div>
//       <h2>Cinema Owner Registration</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={registerData.email}
//           onChange={(e) => handleInputChange(e, setRegisterData)}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={registerData.password}
//           onChange={(e) => handleInputChange(e, setRegisterData)}
//         />
//         <input
//           type="text"
//           name="cinema_name"
//           placeholder="Cinema Name"
//           value={registerData.cinema_name}
//           onChange={(e) => handleInputChange(e, setRegisterData)}
//         />
//         <input
//           type="number"
//           name="latitude"
//           placeholder="Latitude"
//           value={registerData.latitude}
//           onChange={(e) => handleInputChange(e, setRegisterData)}
//         />
//         <input
//           type="number"
//           name="longitude"
//           placeholder="Longitude"
//           value={registerData.longitude}
//           onChange={(e) => handleInputChange(e, setRegisterData)}
//         />
//         <button type="submit">Register</button>
//       </form>

//       <h2>Cinema Owner Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={loginData.email}
//           onChange={(e) => handleInputChange(e, setLoginData)}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={loginData.password}
//           onChange={(e) => handleInputChange(e, setLoginData)}
//         />
//         <button type="submit">Login</button>
//       </form>

//       <h2>Add Movie</h2>
//       <form onSubmit={handleAddMovie}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Movie Title"
//           value={movieData.title}
//           onChange={(e) => handleInputChange(e, setMovieData)}
//         />
//         <input
//           type="datetime-local"
//           name="time"
//           placeholder="Show Time"
//           value={movieData.time}
//           onChange={(e) => handleInputChange(e, setMovieData)}
//         />
//         <textarea
//           name="description"
//           placeholder="Movie Description"
//           value={movieData.description}
//           onChange={(e) => handleInputChange(e, setMovieData)}
//         ></textarea>
//         <input
//           type="url"
//           name="trailer"
//           placeholder="Trailer URL"
//           value={movieData.trailer}
//           onChange={(e) => handleInputChange(e, setMovieData)}
//         />
//         <input
//           type="url"
//           name="poster"
//           placeholder="Poster URL"
//           value={movieData.poster}
//           onChange={(e) => handleInputChange(e, setMovieData)}
//         />
//         <button type="submit">Add Movie</button>
//       </form>
//     </div>
//   );
// };

// export default CinemaOwner;


import React, { useState } from 'react';
import axios from 'axios';

// SignIn Component (No backend integration, without SignUp)
const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hardcoded valid credentials
  const validEmail = 'utopia@gmail.com';
  const validPassword = 'password123';

  const handleSignIn = async () => {
    try {
      const response = await axios.post('https://localhost:5000/api/auth/login', {
        email,
        password,
      });
      setError('');
      onSignIn(response.data.token); 
    } catch (err) {
      setError('Invalid email or password');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
      <div className="bg-opacity-70 bg-black p-10 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <button
          onClick={handleSignIn}
          className="w-full p-3 bg-pink-600 rounded text-white font-semibold hover:bg-pink-700"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};


// CinemaDashboard Component
const CinemaDashboard = () => {
  const [movies, setMovies] = useState([
    { title: 'Kelelitu 6 Seat', time: '2024-11-01T14:00', description: 'A horror movie', poster: '../images/upcome/u1.jpg', trailer: 'https://www.youtube.com/embed/DNZkLByyYrU' },
    { title: 'Tizita', time: '2024-11-01T16:30', description: 'A suspenseful love movie', poster: '../images/rec/rec3.jpg', trailer: 'https://www.youtube.com/embed/DNZkLByyYrU' },
  ]);

  const [newMovie, setNewMovie] = useState({
    title: '',
    time: '',
    description: '',
    trailer: '',
    poster: '',
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [errorFields, setErrorFields] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setNewMovie((prev) => ({
        ...prev,
        [name]: fileURL,
      }));


      // Simulate upload progress
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((progress) => {
          if (progress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return progress + 10;
        });
      }, 200);
    }
  };

  const addMovie = () => {
    const requiredFields = ['title', 'time', 'description', 'trailer', 'poster'];
    const missingFields = requiredFields.filter((field) => !newMovie[field]);

    if (missingFields.length > 0) {
      setErrorFields(missingFields);
      setIsAdded(false);
    } else {
      setMovies((prev) => [newMovie, ...prev]);
      setNewMovie({ title: '', time: '', description: '', trailer: '', poster: '' });
      setErrorFields([]);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 rounded-lg shadow-lg flex flex-col max-w-full mx-auto">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8 glow">
        Cinema Dashboard
      </h1>

      {/* Cinema Info */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-pink-300">Cinema Name: Alem Cinema</h2>
        <p className="text-lg text-blue-200">Location: Bole Addis Ababa</p>
      </div>

      {/* Movies Section */}
      <div className="mb-8">
        <h3 className="text-3xl font-semibold text-pink-400 mb-4">Today's Shows</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-56 object-cover bg-black"
              />
              <div className="p-4">
                <h4 className="text-2xl font-semibold text-yellow-300">{movie.title}</h4>
                <p className="text-lg text-pink-200">Showtime: {new Date(movie.time).toLocaleString()}</p>
                <p className="text-sm text-gray-400 mt-2">{movie.description}</p>
                {movie.trailer && (
                  <div className="mt-4">
                    <video
                      controls
                      src={movie.trailer}
                      className="w-full h-40 rounded-lg shadow-lg object-cover"
                    ></video>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Movie Form */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-pink-400 mb-4">Add New Movie</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleInputChange}
            placeholder="Movie Title"
            className={`border p-2 rounded w-full text-gray-800 focus:border-pink-400 ${
              errorFields.includes('title') ? 'border-red-500' : 'border-gray-700'
            }`}
          />
          <input
            type="datetime-local"
            name="time"
            value={newMovie.time}
            onChange={handleInputChange}
            className={`border p-2 rounded w-full text-gray-800 focus:border-pink-400 ${
              errorFields.includes('time') ? 'border-red-500' : 'border-gray-700'
            }`}
          />
        </div>

        {/* Description Row */}
        <textarea
          name="description"
          value={newMovie.description}
          onChange={handleInputChange}
          placeholder="Movie Description"
          className={`border p-2 rounded w-full text-gray-800 mt-4 focus:border-pink-400 ${
            errorFields.includes('description') ? 'border-red-500' : 'border-gray-700'
          }`}
        ></textarea>

        {/* Upload Buttons in One Row */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <label className="flex items-center justify-center bg-pink-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-pink-700 shadow-lg">
            Upload Movie Image
            <input
              type="file"
              accept="image/*"
              name="poster"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <label className="flex items-center justify-center bg-purple-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-purple-700 shadow-lg">
            Upload Movie Trailer
            <input
              type="file"
              accept="video/*"
              name="trailer"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="mt-2">
            <div className="w-full bg-gray-300 rounded-full">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress}%
              </div>
            </div>
          </div>
        )}

        <button
          onClick={addMovie}
          className="mt-4 px-4 py-2 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-md"
        >
          Add Movie
        </button>

        {/* Success and Error Messages */}
        {isAdded && (
          <div className="mt-4 p-2 bg-green-100 text-green-700 rounded shadow-md">
            Movie added successfully!
          </div>
        )}
        {errorFields.length > 0 && (
          <div className="mt-4 p-2 bg-red-100 text-red-700 rounded shadow-md">
            Please fill in all required fields.
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component without SignUp
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      {isSignedIn ? (
        <CinemaDashboard />
      ) : (
        <SignIn onSignIn={() => setIsSignedIn(true)} />
      )}
    </>
  );
};

export default App;