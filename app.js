const express = require("express");
const app = express();
var cors = require("cors");
const script = require("./routes/api/script");

app.use(cors());
app.use(express.json());

app.use("/api", script);

module.exports = app;
