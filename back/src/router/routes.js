// /src/router/routes.js

const { Router } = require("express");
const movieRouter = require("./movieRouter");
const postMovie = require("./moviePostRouter");

const router = Router();

router.use("/movies", movieRouter);
router.use("/moviePost", postMovie);


module.exports = router;