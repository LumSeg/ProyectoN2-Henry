// /src/movieControllers.js

const moviesService = require("../services/moviesService");
const catchAsync = require("../utils/catchAsync");

const getMovies = async (req, res) => { 
    const movies = await moviesService.getMovies(); 
    res.status(200).json(movies);                
};    

const getMovieById = async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.getMovieById(id);
    res.status(200).json(movie);   
};

const getMovieByTitle = async (req, res) => {
    const { title } = req.body;
    const movie = await moviesService.findMovieByTitle(title);
    res.status(200).json(movie);
};

const createMovie = async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const newMovie = await moviesService.createMovie({title, year, director, duration, genre, rate, poster});
    res.status(201).json(newMovie);
};

module.exports = {
    getMovies: catchAsync(getMovies),
    getMovieById: catchAsync(getMovieById),
    getMovieByTitle: catchAsync(getMovieByTitle),
    createMovie: catchAsync(createMovie),
};
