<<<<<<< 682870098d8d6a7c86abf55cba87ed1962944b3b
=======


//COMMONG VARIABLES ON THE ROUTES PAGE
var homeController = require('../home');
var products = db.ITEMS;
var users = db.users;

module.exports = function(app) {
  app.get('/', homeController.renderHome);
 


	app.get('/', function(req, res) {
	    res.render('index');
	});
	app.get('/about', function(req, res) {
	    res.render('about');
	});
	app.get('/cart', function(req, res) {
	    res.render('cart');
	});
	app.get('/contact', function(req, res) {
	    res.render('contact');
	});
	app.get('/signin', function(req, res) {
	    res.render('signin');
	});

	// Display the products page using the find all function to read oru sequelize DB
	app.get('/products', function(req, res) {
			
			products.findAll({
				 
			}).then(function(data){
				// the query we are looking for in each div

				res.render("products",{
					products: data
				});
			});
	});
	app.get('/search', function(req, res) {
	    res.render('search');
	});

	app.get('/products/:product', function(req, res) {
     var item = req.params.product;
     console.log(item);
     products.findOne({
           where: {
              product: item
           }
     }).then(function(data) {
         console.log('product Data' + data);
          res.render('product', {
            product: data
          });
     });
	});
	
};

