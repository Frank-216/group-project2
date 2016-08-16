// //Add Dependencies 
// var express = require('express');
// var router = express.Router();
// var products = require('../models/items.js');
// var Users = require('../models/Users.js');
// var Images = require("..models/images.js");

var homeController = require('../home');

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
	app.get('/products', function(req, res) {
	    res.render('products');
	});
	app.get('/search', function(req, res) {
	    res.render('search');
	});

	app.get('/products/:product', function(req, res) {
     var product = req.params.product;
     Items.findOne({
           where: {
              product: product
           }
     }).then(function(product) {
          console.log('product', product);
          res.render('product', {
            product: product
          });
     });
	});
	app.get('/products/:product', function(req, res) {
     var product = req.params.product;
     Items.findOne({
           where: {
              product: product
           }
     }).then(function(product) {
          console.log('product', product);
          res.render('product', {
            product: product
          });
     });

});
};
