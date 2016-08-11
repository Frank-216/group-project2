//Call Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

// set up preserver work 
var app = express();
//allows access to complete public domain
app.use(express.static(__dirname +'/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// sets express engine to handlebars and sets the default handlebar page to main
app.engine('handlebars',handlebars({
	defalutLayout: 'main'
}));
// setting view engine 
app.set('view engine','handlebars');

//set the port connection. Either heroku or local host 
var port = process.env.PORT || 3000;


// Launch server  
app.listen(port, function(){
	console.log("Connected to "+ port);
})