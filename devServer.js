const express = require("express");
const app = express();

const routes = require("./routes/router");

app.use('/', routes);

app.listen(5000, function () {
    console.log("Server started in http://localhost:5000/");
})