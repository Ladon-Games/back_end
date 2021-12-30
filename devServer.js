const express = require("express");
const app = express();

const routes = require("./routes/router");

app.use('/', routes);

app.listen(process.env.PORT || 5000, function () {
    console.log("Server started in http://localhost:5000/");
})