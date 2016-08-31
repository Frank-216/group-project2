//Call Dependencies
var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
//import the npm --connect-session-sequelize
var cookieParser = require('cookie-parser')
var Sequelize = require('sequelize')
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

//Twitter
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
//AWS IoT
// var awsIot = require('aws-iot-device-sdk');

//AWS Iot
// var device = awsIot.device({
//    keyPath: './certs/private.pem.key',
//   certPath: './certs/certificate.pem.crt',
//     caPath: './certs/root-CA.crt',
//   clientId: 'theWanderers',
//     region: 'us-east-1'
// });

// device
//   .on('connect', function() {
//     console.log('connected');
//   });

//=============================================


passport.use(new Strategy({
    consumerKey: process.env.CONSUMER_KEY || '5tINHRqLbPF2jdP9a6mwSkFXM',
    consumerSecret: process.env.CONSUMER_SECRET || 'UIK8EiE8qcAwlrniqYpqg6XmJTfOU2PZV1EuyqeSbpuX3FnhwK',
    callbackURL: 'http://secure-hollows-40657.herokuapp.com/login/twitter/return'
  },
  function(token, tokenSecret, profile, cb) {
    // In this example, the user's Twitter profile is supplied as the user
    // record.  In a production-quality application, the Twitter profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
  //   return cb(null, profile);
  }));

// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

//==============================================
var flash = require('connect-flash');



// db
global.db = require('./models');
var connection = new Sequelize(process.env.JAWSDB_URL);

// launch app


app.use(cookieParser())
app.use(session({
  secret: 'speakeasyconservatory',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000 * 60 * 24 * 14
  }
}));

///--- sync everything---

connection.query('SET FOREIGN_KEY_CHECKS = 0')

// make our tables
// note: force:true drops the table if it already exists---{force: true}
.then(function(){
  return connection.sync()
});
//allows access to complete public domain
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));


// configure express for the SequlizeStore


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: connection
    // not sure if connection is a property of sequlize
  }),
  expiration: 180 * 60 * 1000 
}))

//Twitter ========================================================
app.get('/login/twitter',
  passport.authenticate('twitter'));


app.get('/login/twitter/return', 
  passport.authenticate('twitter', { failureRedirect: '/signin' }),
  function(req, res) {
    res.redirect('/');
  });
//================================================================

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(flash());
//make session available for hbs
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});
// Set routes 
var htmlRoutes =require('./controllers/routes/htmlRoutes')(app);

var apiRoutes = require('./controllers/routes/apiRoutes')(app);
//set the port connection. Either heroku or local host 
var port = process.env.PORT || 3000;



// Launch server  
connection.sync().then(function() {
      app.listen(port, function() {
      console.log("Connected to " + port);
  })
})





