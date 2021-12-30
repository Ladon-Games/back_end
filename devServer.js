const app = require("express")();
const port = process.env.PORT || 5000;

const routes = require("./routes/router");

app.use('/', routes);

app.listen(port, function () {
    console.log(`Server started in http://localhost:${port}/`);
})