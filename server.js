//Call Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var app = express();





// db
global.db = require('./models');



// set up app wo
var app = express();


//allows access to complete public domain
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
// sets express engine to handlebars and sets the default handlebar page to main
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// Set routes 
var htmlRoutes =require('./controllers/routes/htmlRoutes')(app);
// app.use("/",htmlRoutes);


var htmlRoutes = require('./controllers/routes/htmlRoutes')(app);


//set the port connection. Either heroku or local host 
var port = process.env.PORT || 3000;


// Launch server  
db.sequelize.sync().then(function(){
  app.listen(port, function() {

    console.log("Connected to " + port);
  })
})

db.sequelize.sync().then(function(){
  app.listen(port, function() {
    console.log("Connected to " + port);
  })
});
// Launch server  



