//COMMONG VARIABLES ON THE ROUTES PAGE
var homeController = require('../home');
var products = db.ITEMS;
var users = db.user;

// express-session

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
            res.render('cart');
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
        app.get('/signin/', function(req, res) {

            app.post('/signin/existing', function(req, res) {
                var cred = req.body;
                console.log(cred.username);

                users.findOne({
                    where: {
                        user_name: cred.username
                    }
                }).then(function(data) {
                    // store user information in local storage
                    console.log(data);
                    var user = data;

                    res.redirect('/products');

                })
            });
            // register information 
            app.post("/signin/", function(req, res) {

                app.post("/signin/new", function(req, res) {
                        console.log('post');
                        console.log(req.body);

                        users.create({
                            user_name: req.body.username,
                            email: req.body.email,
                            password: req.body.password,
                            street_name: req.body.address,

                            phone_number: null

                            // zip:req.body.zipCode
                        }).then(function(data) {
                            console.log(data);

                            req.session.user = data;
                            res.redirect('/products');
                        })

                    })
                    // Display the products page using the find all function to read oru sequelize DB
                app.get('/products', function(req, res) {

                    products.findAll({

                    }).then(function(data) {
                        // the query we are looking for in each div

                        res.render("products", {
                            products: data
                        });
                    });
                });
                app.get('/testimonials', function(req, res) {
                    res.render('testimonials');
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


            });
        });
};