const app = require("express")();
const morgan = require("morgan");

// configure logging, dev mode by default
const env = process.env.ENV || "dev";
app.use(morgan(env));

// route handlers
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;
