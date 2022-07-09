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
// create a new file with an auto increment id
const postFile = require("../db/postFile");
router.post("/", async (req, res, next) => {
  try {
    const postResult = await postFile(req.body);
    res.status(201).send(postResult);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
