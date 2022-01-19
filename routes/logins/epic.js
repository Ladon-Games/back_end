var epicLogin = require('express').Router()
  , https = require('https');

const requestOptions = {
  headers: {
    'X-Epic-Event-Action': 'login',
    'X-Epic-Event-Category': 'login',
    'X-Epic-Strategy-Flags': '',
    'X-Requested-With': 'XMLHttpRequest',
    'Host': 'www.epicgames.com'
  }
}

epicLogin.get('/', function (req, res) {
  requestOptions.hostname = 'www.epicgames.com';
  requestOptions.path = `/id/api/set-sid?sid=${req.query.sid}`

  https.get(requestOptions, (response) => {
    var cookiesOriginal = response.headers['set-cookie'];
    var cookies = {};

    cookiesOriginal.forEach(cookie => {
      var name = cookie.match(/.*?(?==)/g)[0];
      cookies[name] = cookie;
    })

    if (!cookies["EPIC_BEARER_TOKEN"]) 
      return res.send('Failed autentication')

    global.userAccounts.epic = cookies;
    res.redirect('/')
  })
})

module.exports = epicLogin;