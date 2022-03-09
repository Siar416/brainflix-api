const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const videosRoute = require("./routes/videos");

//using routing by define endpoint
app.use("/videos", videosRoute);

//show morgan biolerplate
app.use(morgan("tiny"));

//port
const SERVER_PORT = 8000;

// app listening on port 8000
app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
