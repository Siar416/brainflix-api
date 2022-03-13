const express = require("express");
const router = express.Router();
const fs = require("fs");

function readVideos() {
  const videoData = fs.readFileSync("data/videos.json");
  const parsedVideos = JSON.parse(videoData);
  return parsedVideos;
}

function writeVideo(data) {
  const stringifiedVideo = JSON.stringify(data);
  fs.writeFileSync("./data/videos.json", stringifiedVideo);
}

router.get("/", (req, res) => {
  const parseData = readVideos();
  console.log(res);
  res.json(parseData);
});

router.get("/:id", (req, res) => {
  const videoData = readVideos();

  const individualVidoe = videoData.find((video) => video.id === req.params.id);

  if (!individualVidoe) {
    return res.status(404).send("video not found");
  }

  res.json(individualVidoe);
});

router.post("/", (req, res) => {
  const parseData = readVideos();
  const { title, desc, id } = req.body;

  const newVideo = {
    title,
    desc,
    id,
    image: "http://localhost:8000/images/Upload-video-preview.jpg",
    channel: "Siar Wahidi",
    views: "0",
    likes: "0",
    duration: "3:00",
    timestamp: new Date().toLocaleDateString(),
    comments: [
      {
        name: "John Doe",
        comment: "This is such an amazing video, a must watch for all",
        likes: 0,
        timestamp: new Date().toLocaleDateString(),
      },
      {
        name: "Mary Jane",
        comment:
          "I cant believe this guys recording his videos while riding his bike one million miles an hour",
        likes: 0,
        timestamp: new Date().toLocaleDateString(),
      },
      {
        name: "Google was my idea",
        comment:
          "This video was okay, become a travel pro in one lesson was way better IMO",
        likes: 0,
        timestamp: new Date().toLocaleDateString(),
      },
    ],
  };

  parseData.push(newVideo);

  writeVideo(parseData);

  res.status(201).json(newVideo);
});

module.exports = router;
