require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/:locationName", (req, res) => {
  const location = req.params.locationName;
  res.send(`Here is ${location}`);
});

app.get("/:locationName/:timeOption", (req, res) => {
  const location = req.params.locationName;
  const date = req.params.timeOption;
  res.send(`Here is ${req.params.locationName} on ${req.params.timeOption}`);
});
module.exports = app;
