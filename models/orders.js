'use strict';

module.exports = function(sequelize,DataTypes){


	var Orders = sequelize.define('Orders', {
	  /*user: DataTypes.TEXT,*/
	  cart: DataTypes.JSON,
		address: DataTypes.TEXT,
		name: DataTypes.TEXT,
		paymentID:DataTypes.TEXT
	},{
		classMethods:{
			associate: function(models) { 
				
			}
		}
	})

	return Orders;
}

