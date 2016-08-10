var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var router = express.Router();
var pizza = require('../models/pizza.js');

router.get('/', function (req, res) {
	res.redirect('/pizza');
});

router.get('/pizza', function (req, res) {
	pizza.all(function (data) {
		var hbsObject = { pizza: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/pizza/create', function (req, res) {
	pizza.create(['pizza_name', 'devoured'], [req.body.pizza_name, req.body.devoured], function () {
		res.redirect('/pizza');
	});
});

router.put('/pizza/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	pizza.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/pizza');
	});
});

router.delete('/pizza/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	pizza.delete(condition, function () {
		res.redirect('/pizza');
	});
});

module.exports = router;
