const routes = require("express").Router()
    , passport = require('passport');

const loginIntegrations = require('./loginIntegrations')
    , endpoint = require('./endpoint');

routes.get('/', function(req, res) {
    res.send('Êxito na página inicial')
})

routes.use(passport.initialize());
routes.use(passport.session());

routes.use('/loginIntegrations', loginIntegrations);
routes.use('/endpoint', endpoint);

module.exports = routes