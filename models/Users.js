'use strict';

module.exports = function(sequelize,DataTypes){


	var User = sequelize.define('user', {
	  user_name: DataTypes.TEXT,
	  email: DataTypes.TEXT,
		password: DataTypes.TEXT,
		street_name: DataTypes.TEXT,
		city:DataTypes.TEXT,
		state: DataTypes.TEXT,
		zip: DataTypes.TEXT ,
		
		phone_number:DataTypes.INTEGER
	},{
		classMethods:{
			associate: function(models) { 
				User.hasMany(models.ITEMS,{onDelete:'cascade', hooks:true});
			}
		}
	})

	return User;
}

