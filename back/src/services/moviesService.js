// /src/moviesService.js

const Movies = require("../models/Movies");


module.exports = {
  getMovies: async () => {
    const movies = await Movies.find();
    return movies;
  },

  getMovieById: async (id) => {
    const movie = await Movies.findById(id);
    return movie;
  },

  findMovieByTitle: async (title) => {
    const movie = await Movies.findOne({ title });
    return movie;
  },

  createMovie: async (movies) => {
    const newMovie = await Movies.create(movies);
    return newMovie; 
  },
};