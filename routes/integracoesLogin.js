var integracoesLogin = require('express').Router()
  , steamLogin = require('./logins/steam')
  , epicLogin = require('./logins/epic');

integracoesLogin.use('/steam', steamLogin);
integracoesLogin.use('/epic', epicLogin);

module.exports = integracoesLogin;