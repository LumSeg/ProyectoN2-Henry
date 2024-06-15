// /src/moviePostRouter.js

const { Router } = require("express");
const postControllers = require("../controllers/moviePostControllers");

const postMovie = Router();

postMovie.get("/", postControllers.getAllPostMovies);

module.exports = postMovie;