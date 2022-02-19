const schedule = require('node-schedule');
const express = require('express')
const { auth } = require('express-openid-connect');


// setup the express app
const app = express()
const port = 3000

// express get request
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// setting up the cronjob scheduler
/* const job = schedule.scheduleJob('44 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});*/ 

/* 
 setting up the auth0
*/
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'E8HM4ZcVK4CiEKjsbXUpO9iCfQwXyvRL',
  issuerBaseURL: 'https://dev-iftxdk33.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.listen(port, () => {
  console.log("App started listening on port: ");
  console.log(port);
})