import React, { useState } from "react";

const UtopiaCinemaReview = () => {
  const movies = [
    { title: "Simet", image: "../images/upcome/u5.jpg" },
    { title: "Direder", image: "../images/upcome/u6.jpg" },
    { title: "kelilitu6seat", image: "../images/upcome/u1.jpg" },
    { title: "Kuragnye", image: "../images/upcome/u3.jpg" },
    { title: "Tizeta", image: "../images/rec/rec3.jpg" },
    { title: "Doka", image: "../images/rec/rec2.jpg" },
    { title: "Andtarik", image:"../images/rec/rec1.jpg" },
    { title: "Lebaenaleba", image: "../images/upcome/u2.jpg" },
    { title: "Setaygebam", image: "../images/upcome/u4.jpg" },
  ];

  const [selectedMovie, setSelectedMovie] = useState(movies[0].title);
  const [reviews, setReviews] = useState({
    Setaygebam: [{ name: "Kidst", rating: 5, description: "Best  movie i have ever seen!", image: null },{ name: "kirubel", rating: 5, description: "Best romantic movie!", image: null },{ name: "mahlet", rating: 5, description: "good movie! but it is not that much intersting ", image: null }],
    Simet: [{ name: "Liya", rating: 5, description: "A masterpiece about space and time.", image: null },{ name: "kidus", rating: 5, description: "Best historical movie!", image: null },{ name: "hilina", rating: 5, description: "Best movie!", image: null }],
    kelilitu6seat: [{ name: "merwan", rating: 5, description: "best horror movie i have ever seen", image: null },{ name: "John", rating: 5, description: "Best superhero movie!", image: null },{ name: "meklit", rating: 5, description: "Best horror movie!", image: null }],
    Direder: [{ name: "surafel", rating: 3, description: "good family movie but not that much intersting", image: null },{ name: "hanan", rating: 5, description: "Best love story!", image: null },{ name: "yididya", rating: 2, description: " i don't like it.", image: null }],
    Lebaenaleba: [{ name: "samri", rating: 5, description: "best comedy i like it.", image: null },{ name: "nigst", rating: 5, description: "Best love movie!", image: null },{ name: "mahlet", rating: 5, description: "Best comedy movie!", image: null }],
    Kuragnye: [{ name: "Frodos", rating: 5, description: "An incredible journey.", image: null },{ name: "Biruk", rating: 5, description: "best anicent movie .i like it .", image: null },{ name: "nithu", rating: 5, description: "Best movie!", image: null }],
    Tizeta: [{ name: "Frodo", rating: 5, description: "An epic love story", image: null },{ name: "John", rating: 5, description: "Best superhero movie!", image: null },{ name: "John", rating: 5, description: "Best superhero movie!", image: null }],
    Doka: [{ name: "merhawi", rating: 4, description: "it was best movie.mahder asfa make me feel it was real .", image: null },{ name: "habtamu", rating: 2, description: "i didn't get it like i expected", image: null },{ name: "genet", rating: 5, description: "Best movie!", image: null }],
    Andtarik: [{ name: "yohannes", rating: 4, description: "i like it. selam did it well.", image: null },{ name: "abrham", rating: 1, description: "i didn't like it at all!", image: null },{ name: "redet", rating: 5, description: "Best movie!", image: null }],
  });
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, rating, description, image };
    setReviews({
      ...reviews,
      [selectedMovie]: [newReview, ...(reviews[selectedMovie] || [])].slice(0, 4),
    });
    setName("");
    setRating(0);
    setDescription("");
    setImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-500">Utopia Cinema Reviews</h1>

      {/* Centered Horizontal Scrollable Movie List with Attractive Scrollbar */}
      <div className="flex justify-center space-x-6 overflow-x-auto mb-8 w-full max-w-5xl px-4 custom-scrollbar">
        {movies.map((movie) => (
          <div key={movie.title} className="text-center">
            <button
              onClick={() => setSelectedMovie(movie.title)}
              className={`w-24 h-24 rounded-full overflow-hidden border-4 ${
                selectedMovie === movie.title ? "border-purple-500" : "border-gray-700"
              }`}
            >
              <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
            </button>
            <p className="text-gray-300 mt-2">{movie.title}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-4 text-purple-400">{selectedMovie} Reviews</h2>

      {/* Reviews and Form (unchanged) */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {(reviews[selectedMovie] || []).slice(0, 3).map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                {review.image ? (
                  <img src={review.image} alt="User" className="w-full h-full object-cover" />
                ) : (
                  review.name[0].toUpperCase()
                )}
              </div>
              <div className="ml-4">
                <p className="font-bold text-gray-800">{review.name}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.description}</p>
          </div>
        ))}
      </div>

      {/* Add new review form */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Your Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-800 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1">Rating</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-800 mb-1">Movie Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded bg-gray-100 text-gray-800 border border-gray-300 h-28 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Describe the movie..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-gray-800 mb-1">Upload Image (Optional)</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
                id="upload"
              />
              <label
                htmlFor="upload"
                className="inline-block w-full p-2 text-center rounded bg-purple-600 hover:bg-purple-700 transition-colors text-white font-bold cursor-pointer"
              >
                Choose Image
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded bg-purple-600 hover:bg-purple-700 transition-colors text-white font-bold"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #a855f7 #2d2d2d;
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #a855f7;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2d2d2d;
        }
      `}</style>
    </div>
  );
};

export default UtopiaCinemaReview;
