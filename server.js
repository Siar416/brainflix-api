require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const videosRoute = require("./routes/videos");
// const { PORT } = process.env;

app.use(express.static("./public"));

//cors
app.use(cors());

app.use(express.json());

//using routing by define endpoint
app.use("/videos", videosRoute);

//show morgan biolerplate
app.use(morgan("tiny"));

const SERVER_PORT = process.env.PORT || 8100;

// app listening on port 8000
app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port: ${SERVER_PORT}`);
});
