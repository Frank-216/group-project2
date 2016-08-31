//Call Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
//import the npm --connect-session-sequelize
var cookieParser = require('cookie-parser');

var Sequelize = require('sequelize'),
    connection;
if (process.env.JAWSDB_URL) {
   connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize('store_db', 'root', 'password', {
    host:'localhost',
    dialect:'mysql',
    port: '3306'
  })
}



var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var flash = require('connect-flash');



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
// process.env.PORT will use the heroku port the heroku provide
var port = process.env.PORT || 3000;



// Launch server  
db.sequelize.sync().then(function() {
      app.listen(port, function() {
      console.log("Connected to " + port);
  })
})





