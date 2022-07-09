const express = require("express");
const router = express.Router();

// home page
router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// GET
// return a file based on requested id
router.get("/:id", (req, res) => {
  res.send("About birds");
});

// POST
router.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
