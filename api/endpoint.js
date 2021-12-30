const express = require("express");
const app = express();

const route = require("../routes/endpoint");

app.use("/api/", route);

module.exports = app;