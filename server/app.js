require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", () => {
  console.log("HEY");
});

module.exports = app;
