const express = require("express");
const app = express();

const routes = require("./routes/router");

app.use('/back_end', routes);

app.listen(3000, function () {
    console.log("Server started in http://localhost:3000/");
})