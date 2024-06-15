// /src/movieRouter.js

const { Router } = require("express");
const moviesControllers = require("../controllers/movieControllers");
const validateMovie = require("../middlewares/validateMovie");

const movieRouter = Router();

movieRouter.get("/", moviesControllers.getMovies);
movieRouter.get("/byTitle", moviesControllers.getMovieByTitle);
movieRouter.get("/:id", moviesControllers.getMovieById);
movieRouter.post("/", validateMovie, moviesControllers.createMovie);

module.exports = movieRouter;