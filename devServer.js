require('dotenv').config()

const app = require('express')()
    , port = process.env.PORT || process.env.PORT_LOCAL
    , routes = require("./routes/router")
    , globalFunctions = require('./functions/globais');

globalFunctions.init();

app.use('/', routes);

app.listen(port, function () {
    console.log(`Server started in http://localhost:${port}/`);
})