const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// read from json
function readVideos() {
  const videoData = fs.readFileSync("data/videos.json");
  const parsedVideos = JSON.parse(videoData);
  return parsedVideos;
}

// trying to get videos from json file
router.get("/", (req, res) => {
  const parseData = readVideos();
  // console.log(res);

  res.json(parseData);
});

//need to get individual video by its id
router.get("/:id", (req, res) => {
  const videoData = readVideos();

  const individualVidoe = videoData.find((video) => video.id === req.params.id);

  if (!individualVidoe) {
    return res.status(404).send("video not found");
  }

  res.json(individualVidoe);
});

module.exports = router;
