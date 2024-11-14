const express = require("express");
const Movie = require("../models/Movie");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add a new movie
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description, image, releaseDate } = req.body;
    const movie = new Movie({ title, description, image, releaseDate, owner: req.user.id });
    await movie.save();

    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all movies for the logged-in owner
router.get("/", authMiddleware, async (req, res) => {
  try {
    const movies = await Movie.find({ owner: req.user.id });
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
