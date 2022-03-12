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

function writeVideo(data) {
  const stringifiedVideo = JSON.stringify(data);
  fs.writeFileSync("./data/videos.json", stringifiedVideo);
}

// get all videos
router.get("/", (req, res) => {
  const parseData = readVideos();
  console.log(res);
  res.json(parseData);
});

// need to get individual video by its id
router.get("/:id", (req, res) => {
  const videoData = readVideos();

  const individualVidoe = videoData.find((video) => video.id === req.params.id);

  if (!individualVidoe) {
    return res.status(404).send("video not found");
  }

  res.json(individualVidoe);
});

// create/upload video
router.post("/", (req, res) => {
  const parseData = readVideos();
  const { title, desc, id } = req.body;

  const newVideo = {
    title,
    desc,
    id,
    image: "http://localhost:8000/images/image0.jpeg",
    channel: "no channel",
    views: "0",
    likes: "0",
    duration: "1:00",
    timestamp: new Date().toLocaleDateString(),
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
        likes: 0,
        timestamp: 1628522461000,
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        likes: 0,
        timestamp: 1626359541000,
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
        likes: 0,
        timestamp: 1626011132000,
      },
    ],
  };

  parseData.push(newVideo);

  writeVideo(parseData);

  res.status(201).json(newVideo);
});

module.exports = router;
