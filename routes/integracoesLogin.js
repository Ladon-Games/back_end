var integracoesLogin = require('express').Router()
  , steamLogin = require('./logins/steam');

integracoesLogin.use('/steam', steamLogin);

module.exports = integracoesLogin;