//Call Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var app = express();
//import the npm --connect-session-sequelize
var cookieParser = require('cookie-parser')
var Sequelize = require('sequelize')
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);


// create database, ensure 'sqlite3' in your package.json 
/*var sequelize = new Sequelize(
"database",
"username",
"password", {
    "dialect": "sqlite",
    "storage": "./session.sqlite"
});*/
// we do not want to creat a new db, since we already have one

var cartHelper = {
  add: function(cart, item, id) {
     var storedItem = cart.items[id];
     if (!storedItem) {
         storedItem = cart.items[id] = {item: item, qty: 0, price: 0};
     }
     storedItem.qty++;
     storedItem.price = storedItem.item.price * storedItem.qty;
     cart.totalQty++;
     cart.totalPrice += storedItem.item.price;
  },
  generateArray : function(cart) {
     var arr = [];
     for (var id in cart.items) {
         arr.push(cart.items[id]);
     }
     return arr;
  }
};



//Route config 
var htmlRoutes = require('./controllers/routes/htmlRoutes');
var apiRoutes = require('./controllers/routes/apiRoutes');

// db
global.db = require('./models');

///--- sync everything---
var models  = require('./models');
var sequelizeConnection = models.sequelize;

sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// make our tables
// note: force:true drops the table if it already exists---{force: true}
.then(function(){
  return sequelizeConnection.sync()
});
//---sync everything---


var Images = require('./models')['Images'];
var Users = require('./models')['user'];
var Items = require('./models')['ITEMS'];
var Cart = require('./cart_model/cart');
// set up preserver work 
var app = express();
//allows access to complete public domain
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));


// configure express for the SequlizeStore

app.use(cookieParser())
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


//allows access to the session for all the views
/*app.use(function(req, res) {
    res.locals.session = req.session;
})*/
// sets express engine to handlebars and sets the default handlebar page to main
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/about', function(req, res) {
    res.render('about');
});
app.get('/cart', function(req, res) {
    console.log('session', req.session);
    var cart = req.session.cart || new Cart();
    req.session.cart = cart;    
    var cartItems = cartHelper.generateArray(cart);
    cartItems.forEach(function(item) {
      console.log('item', item);
    });
    res.render('cart', {
      cartItems: cartItems
    });
});
app.get('/contact', function(req, res) {
    res.render('contact');
});
app.get('/signin', function(req, res) {
    res.render('signin');
});
app.get('/products', function(req, res) {
    res.render('products');
});
app.get('/search', function(req, res) {
    res.render('search');
});
app.get('/productInfo', function(req, res) {
    res.render('productinfo');
});


// routes to the cart
app.get('/add-to-cart/:id', function(req, res) {
  var productId = req.params.id;
  var cart = req.session.cart || new Cart();
  req.session.cart = cart;
  console.log('first cart', req.session.cart);

  Items.findOne({
           where: {
              id: productId
           },
           include: [{model: Images, required:true}]
     }).then(function(product) {
         console.log('cart', cart);
         cartHelper.add(cart, product, product.id);
         
         console.log('session cart', req.session.cart);
         console.log("HERE IS WHAT IN THE CART" + req.session.cart);
         res.redirect('/cart');
     });
})

//sets express engin for each product handlebars
app.get('/products/:product', function(req, res) {
     var product = req.params.product;
     Items.findOne({
           where: {
              product: product
           },
           include: [{model: Images, required:true}]
     }).then(function(product) {
          console.log('product', product);
          res.render('product', {
            product: product
          });
     });

});

//set the port connection. Either heroku or local host 
var port = process.env.PORT || 3000;


// Launch server  
app.listen(port, function() {
    console.log("Connected to " + port);
})

