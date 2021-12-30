const app = require("express")();

const route = require("../routes/endpoint");

app.use("/api/", route);

module.exports = app;