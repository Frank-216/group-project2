//Call Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
//import the npm --connect-session-sequelize
var cookieParser = require('cookie-parser')
var Sequelize = require('sequelize')
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);





// db
global.db = require('./models');
var sequelizeConnection = db.sequelize;

// launch app
var app = express();

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


sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// make our tables
// note: force:true drops the table if it already exists---{force: true}
.then(function(){
  return sequelizeConnection.sync()
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
    db: sequelizeConnection
    // not sure if connection is a property of sequlize
  }),
  expiration: 180 * 60 * 1000 
}))



app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// Set routes 
var htmlRoutes =require('./controllers/routes/htmlRoutes')(app);


//set the port connection. Either heroku or local host 
var port = 3000;



// Launch server  
db.sequelize.sync().then(function() {
      app.listen(port, function() {
      console.log("Connected to " + port);
  })
})





