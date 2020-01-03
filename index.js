const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

// port to be opened for backend
const port = process.env.PORT || 3001;

// HTML logger(research more about loggers,
//                 not sure necessary)
app.use(logger("dev"));

// enable Cross-Origin Resource Sharing(Connect/Express middleware)
app.use(cors());

// body-parser for handling HTTP POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import and use route(change for application, this is example)
const dummyRouter = require("./routes/dummyRoute");
app.use("/dummy", dummyRouter);

//port/app startup
app.listen(port, function() {
  console.log("Application backend running on PORT: " + port);
});

module.exports = app;
