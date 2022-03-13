require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const videosRoute = require("./routes/videos");

app.use(express.static("./public"));

app.use(cors());
app.use(express.json());
app.use("/videos", videosRoute);

const SERVER_PORT = process.env.PORT || 8100;

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port: ${SERVER_PORT}`);
});
