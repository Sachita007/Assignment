const express = require("express");
const axios = require("axios");
const _ = require("lodash");
const blogRoutes = require("./Routes/blogRoutes");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.use("/api", blogRoutes);

module.exports = app;
