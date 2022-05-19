require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const waterlevel = require("./water-level.json");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/water-depth", (req, res) => {
  const location = req.params.locationName;
  res.send(waterlevel);
});

app.get("/water-depth/:locationName", (req, res) => {
  const location = req.params.locationName;
  res.send(`water level of ${location} today`);
});

app.get("/water-depth/:locationName/:timeOption", (req, res) => {
  const location = req.params.locationName;
  const date = req.params.timeOption;
  res.send(
    `Water level of ${req.params.locationName} on ${req.params.timeOption}`
  );
});
module.exports = app;
