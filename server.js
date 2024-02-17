const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/asr-frontend"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/asr-frontend/index.html"));
});

app.listen(3200, "0.0.0.0");
