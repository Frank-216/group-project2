var orm = require('../config/orm.js');


var pizza = {
	all: function (cb) {
		orm.all('pizza', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('pizza', cols, vals, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		orm.delete('pizza', condition, function (res) {
			cb(res);
		});
	},	
	update: function (objColVals, condition, cb) {
		orm.update('pizza', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = pizza;
