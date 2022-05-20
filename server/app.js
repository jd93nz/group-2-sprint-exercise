require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const waterlevel = require("./water-level.json");
const locationRepository = require("./location.repository");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World !");
});

// JEFF STUFF BELOW

app.get("/api/locations", async (req, res) => {
  const result = await locationRepository.getLocations();
  res.send(result);
});

app.get("/api/locations/:location", async (req, res) => {
  const result = await locationRepository.getALocation(req.params.location);
  res.send(result);
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
