require('dotenv').config()

var integracoesLogin = require('express').Router()
  , passport = require('passport')
  , session = require('express-session')
  , SteamStrategy = require('passport-steam').Strategy
  , port = process.env.PORT || process.env.PORT_LOCAL;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(new SteamStrategy({
  returnURL: `http://localhost:${port}/integracoesLogin/steam/return`,
  realm: `http://localhost:${port}/`,
  apiKey: process.env.API_KEY
},
  function (identifier, profile, done) {
    process.nextTick(function () {

      profile.identifier = identifier;
      console.log(identifier);
      return done(null, profile);
    });
  }
));

integracoesLogin.use(session({
  secret: 'your secret',
  name: 'name of session id',
  resave: true,
  saveUninitialized: true
}));

integracoesLogin.get('/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

integracoesLogin.get('/steam/return',
  function (req, res, next) {
    req.url = req.originalUrl;
    next();
  },
  passport.authenticate('steam', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

module.exports = integracoesLogin;