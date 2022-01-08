require('dotenv').config()

const app = require('express')()
    , port = process.env.PORT
    , routes = require("./routes/router")
    , globalFunctions = require('./functions/globais');

globalFunctions.init();

app.use('/', routes);

app.listen(port, function () {
    console.log(`Server started in http://localhost:${port}/`);
})