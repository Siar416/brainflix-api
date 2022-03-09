const express = require("express");
const router = express.Router();
const videosData = "/data/videos.json";

// trying to get videos from json file
router.get("/", (req, res) => {
  const allVideos = videosData.map((video) => {
    return {
      title: video.title,
      channel: video.channel,
    };
  });
  res.json(allVideos);
});

// router.get("/", (req, res, then) => {
//   console.log("got it");
//   res.send("did you get it?");
//   then();
// });

module.exports = router;
