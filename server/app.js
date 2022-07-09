const express = require("express");
const morgan = require("morgan");

const app = express();

// parse request body
app.use(express.json());

// configure logging, dev mode by default
const env = process.env.ENV || "dev";
app.use(morgan(env));

// route handlers
app.use("/api", require("./router"));

module.exports = app;
