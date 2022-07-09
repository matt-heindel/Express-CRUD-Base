const express = require("express");
const router = express.Router();

// home page
router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// GET
// return a file based on requested id
const getFile = require("../db/getFile");
router.get("/:id", async (req, res, next) => {
  try {
    const fileData = await getFile(req.params.id);
    res.send(fileData);
  } catch (error) {
    next(error);
  }
});

// POST
router.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
