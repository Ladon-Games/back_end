const endpoint = require('express').Router();

var json = { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }

endpoint.get('/', function (req, res) {
    res.send(json);
})

module.exports = endpoint;