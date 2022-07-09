const express = require("express");
const morgan = require("morgan");

const app = express();

// parse request body
app.use(express.json());

// configure logging, dev mode by default
const env = process.env.ENV || "dev";
app.use(morgan(env));

// route handlers
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = app;
