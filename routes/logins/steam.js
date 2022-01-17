var steamLogin = require('express').Router()
  , passport = require('passport')
  , session = require('express-session')
  , SteamStrategy = require('passport-steam').Strategy
  , port = process.env.PORT;

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
      global.userAccounts.steam = profile;

      return done(null, profile);
    });
  }
));

steamLogin.use(session({
  secret: 'GREAYÉTOP',
  name: 'Greay',
  resave: true,
  saveUninitialized: true
}));

steamLogin.get('/',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

steamLogin.get('/return',
  function (req, res, next) {
    next();
  },
  passport.authenticate('steam', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

module.exports = steamLogin;