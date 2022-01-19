var loginIntegrations = require('express').Router()
  , steamLogin = require('./logins/steam')
  , epicLogin = require('./logins/epic');

loginIntegrations.use('/steam', steamLogin);
loginIntegrations.use('/epic', epicLogin);

module.exports = loginIntegrations;