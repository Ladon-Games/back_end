const routes = require("express").Router()
    , passport = require('passport');

const integracoesLogin = require('./integracoesLogin')
    , endpoint = require('./endpoint');

routes.get('/', function(req, res) {
    res.send('Êxito na página inicial')
})

routes.use(passport.initialize());
routes.use(passport.session());

routes.use('/integracoesLogin', integracoesLogin);
routes.use('/endpoint', endpoint);

module.exports = routes