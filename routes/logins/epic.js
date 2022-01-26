var epicLogin = require('express').Router()
  , https = require('https');

async function getFirstsCookies(sid) {
  const requestOptions = {
    hostname: 'www.epicgames.com',
    path: `/id/api/set-sid?sid=${sid}`,
    headers: {
      'X-Epic-Event-Action': 'login',
      'X-Epic-Event-Category': 'login',
      'X-Epic-Strategy-Flags': '',
      'X-Requested-With': 'XMLHttpRequest',
      'Host': 'www.epicgames.com'
    }
  }

  await https.get(requestOptions, async (response) => {
    var cookiesOriginal = response.headers['set-cookie']
      , cookies = {};

    cookiesOriginal.forEach(cookie => {
      var name = cookie.match(/.*?(?==)/g)[0];
      cookies[name] = cookie.match(/[^=$;]+/g)[1];
    })

    if (!cookies["EPIC_BEARER_TOKEN"])
      return 'Failed autentication'

    return await getAnotherCookies(cookies);
  })
};

async function getAnotherCookies(cookies) {
  await https.get('https://www.epicgames.com/id/api/csrf', async (response) => {
    var cookiesOriginal = response.headers['set-cookie'];
    
    cookiesOriginal.forEach(cookie => {
      var name = cookie.match(/.*?(?==)/g)[0];
      cookies[name] = cookie.match(/[^=$;]+/g)[1];
    })

    if (!cookies['XSRF-TOKEN']) 
      return 'Failed autentication'

    return await getGames(cookies);
  })
}

async function getGames(cookies) {
  const requestOptions = {
    host: 'library-service.live.use1a.on.epicgames.com',
    hostname: 'library-service.live.use1a.on.epicgames.com',
    path: '/library/api/public/items',
    headers: {
      Host: 'library-service.live.use1a.on.epicgames.com',
      Authorization: `bearer ${cookies.EPIC_BEARER_TOKEN}`
    }
  }

  console.log(requestOptions)

  await https.get(requestOptions, async (response) => {
    response.setEncoding('utf-8')
    response.on('data', (data) => {
      console.log(data);
    })
  })
}

epicLogin.get('/', async function (req, res) {
  const response = await getFirstsCookies(req.query.sid);
  //global.userAccounts.epic = cookies;
  //res.redirect('/')
})

module.exports = epicLogin;