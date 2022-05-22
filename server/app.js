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

//Jason--add a new router below
app.get("/api/locations/:location", async (req, res) => {
  const result = await locationRepository.getALocation(req.params.location);
  res.send(result);
});

module.exports = app;
