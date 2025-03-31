const express = require("express");
const app = express();
const serverless = require("serverless-http"); // Add this package

app.get("/", (req, res) => {
  res.send("Hello, DevOps!");
});

module.exports = app;
module.exports.handler = serverless(app);
