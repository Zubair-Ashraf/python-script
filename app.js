const express = require("express");
const app = express();
const script = require("./routes/api/script");

app.use(express.json());

app.use("/api", script);

module.exports = app;
