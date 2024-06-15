// /src/server.js 

const express = require("express");
const router = require("./router/routes");
const app = express();
const morgan = require("morgan");
const cors = require("cors");


app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router);

module.exports = app;