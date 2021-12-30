const routes = require("express").Router();

//Adapt here to your endpoint
const endpoint = require('./endpoint');

routes.get('/', function(req, res) {
    res.send('Êxito na página inicial')
})

routes.use('/', endpoint);

module.exports = routes