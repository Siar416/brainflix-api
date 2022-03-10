const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

function readVideos() {
  const videoData = fs.readFileSync("data/videos.json");

  const parsedVideos = JSON.parse(videoData);

  return parsedVideos;
}

// trying to get videos from json file
router.get("/", (req, res) => {
  const parseData = readVideos();

  res.json(parseData);
});

module.exports = router;
