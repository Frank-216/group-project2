//COMMONG VARIABLES ON THE ROUTES PAGE
var homeController = require('../home');
var products = db.ITEMS;
var users = db.user;
var Images = db.Images;
var Orders = db.Orders;
var Cart = require('../../cart_model/cart');

var cartHelper = {
  add: function(cart, item, qty, id) {
     var storedItem = cart.items[id];
     console.log('storedItem', storedItem);
     console.log(item, qty, id)
     if (!storedItem) {
         storedItem = cart.items[id] = {item: item, qty: qty, price: 0};
         storedItem.price = storedItem.item.price * storedItem.qty;
         cart.totalQty += qty;
         cart.totalPrice += storedItem.price;
     } else {
        storedItem.qty += qty;
        storedItem.price = storedItem.item.price * storedItem.qty;
        cart.totalQty += qty;
        cart.totalPrice += storedItem.item.price * qty;

     }

     cart.plusShipping = cart.totalPrice + 5;

  },
  generateArray : function(cart) {
     var arr = [];
     for (var id in cart.items) {
         arr.push(cart.items[id]);
     }
     return arr;
  }
};


module.exports = function(app) {
  app.get('/', homeController.renderHome);
 

// render the index page 
	app.get('/', function(req, res) {
    	    res.render('index');
	});
	// render the about page 
	app.get('/about', function(req, res) {
	    res.render('about');
	});
	//render the cart page 
	app.get('/cart', function(req, res) {
  
    console.log('session', req.session);
    //render req.session
    var CartTotals = req.session;
    //
    var cart = req.session.cart || new Cart();
    req.session.cart = cart;    
    var cartItems = cartHelper.generateArray(cart);
    cartItems.forEach(function(item) {
      console.log('item------------------------------', item);
    });
    res.render('cart', {
      cartItems: cartItems,
      //render req.session
      CartTotals: CartTotals

    });
  });
	// render the contact page 
	app.get('/contact', function(req, res) {
	    res.render('contact');
	});
	// render the signin page. 
	app.get('/signin', function(req, res) {
	    res.render('signin');
	});

	//create a login route to ensure that customers are able to sign in. 
	app.post('/signin/existing',function (req,res){
		var cred = req.body;
		console.log(cred.username);

		users.findOne({
			where:{
				user_name: cred.username
			}
		}).then(function(data){
			// store user information in local storage
			console.log(data);
			req.session.user = data;
			res.redirect('/products');

		})
	});
	// register information 
	app.post("/signin/new",function(req,res){
		console.log('post');
		console.log(req.body);

		users.create({
			user_name: req.body.username,
			email: req.body.email,
			password: req.body.password,
			street_name: req.body.address,

			// zip:req.body.zipCode
		}).then(function(data){
			req.session.user = data;
			console.log('session user', req.session.user);
			res.redirect('/products');
		})

	})
	// Display the products page using the find all function to read oru sequelize DB
	app.get('/products', function(req, res) {
			console.log('session', req.user);
      var successMsg = req.flash('success')[0];
			products.findAll({
				 include: [{model: Images}]
			}).then(function(data){
				// the query we are looking for in each div
				console.log(req.session.user);
        console.log(data);
				res.render("products",{
					products: data,
          successMsg:successMsg,
          noMessages: !successMsg
				});
			});
	});
	 app.get('/testimonials', function(req, res) {
      res.render('testimonials');
    });


	//sets express engin for each product handlebars
  app.get('/products/:product', function(req, res) {
     var item = req.params.product;
     products.findOne({
           where: {
              product: item
           },
           include: [{model: Images, required:true}]
     }).then(function(data) {
          console.log('product***___***___***___***', data);
          res.render('product', {
            product: data
          });
     });
  });
/*	 // routes to the cart
  app.get('/add-to-cart/:id', function(req, res) {
  var productId = req.params.id;
  var cart = req.session.cart || new Cart();
  req.session.cart = cart;
  console.log('first cart', req.session.cart);

  products.findOne({
           where: {
              id: productId
           },
           include: [{model: Images, required:true}]
     }).then(function(product) {
         console.log('cart', cart);
         cartHelper.add(cart, product, product.id);
         console.log("HERE IS WHAT IN THE session CART", req.session.cart);
         res.redirect('/cart');
     });
  });*/

  app.post('/add-to-cart/:id', function(req, res) {
    console.log("in post secton__________________________________")
    console.log(req.body)
    var quantityValue = parseInt(req.body.quantityValue, 10);
    console.log("order quantity" + quantityValue);
  var productId = req.params.id;
  var cart = req.session.cart || new Cart();
  req.session.cart = cart;
  console.log('first cart**********************', req.session.cart);

  products.findOne({
           where: {
              id: productId
           },
           include: [{model: Images, required:true}]
     }).then(function(product) {
         console.log('cart', cart);
         cartHelper.add(cart, product, quantityValue, product.id);
         console.log("HERE IS WHAT IN THE session CART~~~~~~~~~~~~~~~~~~~~~~~~", req.session.cart);
         res.redirect('/cart');
     });
  });
  
  //checkout page
  app.get('/checkout', function(req, res) {
     if (!req.session.cart) {
      return res.redirect('/cart');
    }
    //render req.session
    var CartTotals = req.session;
    //
    var cart = req.session.cart || new Cart();
    req.session.cart = cart;    
    var errMsg = req.flash('error')[0];
    var cartItems = cartHelper.generateArray(cart);
    cartItems.forEach(function(item) {
      console.log('item------------------------------', item);
    });
    res.render('checkout', {
      cartItems: cartItems,
      //render req.session
      CartTotals: CartTotals,
      errMsg: errMsg,
      noError: !errMsg
    });
  });

  app.post('/checkout', function(req, res) {
    if (!req.session.cart) {
      return res.redirect('/cart');
    }
    /*var cart = new Cart(req.session.cart);*/
    var cart = req.session.cart || new Cart();
    req.session.cart = cart;    
    var stripe = require("stripe")(
      "sk_test_RP5bVjSS5qmDKNrzNoI1jpxY"
    );

    stripe.charges.create({
      amount: req.session.cart.plusShipping * 100,
      currency: "usd",
      source: req.body.stripeToken, // obtained with Stripe.js
      description: "Test Charge"
    }, function(err, charge) {
       if (err) {
          req.flash('error', err.message);
          return res.redirect('/checkout');
       }
       /*create a new order an save to the database*/
       var order =  Orders.build({
         /*user: req.user*/
         cart: req.session.cart,
         address: req.body.address,
         name: req.body.name,
         paymentID: charge.id

       })
       order.save().then(function() {
        req.flash('success', 'Successfully bougtht product!');
        req.session.cart = null;
        res.redirect('/products');
       })
       /*********/
       /*req.flash('success', 'Successfully bougtht product!');
       req.session.cart = null;
       res.redirect('/products');*/
      });
  })

  }// close exports 

