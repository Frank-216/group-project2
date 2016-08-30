'use strict';

module.exports = function(sequelize,DataTypes){


	var User = sequelize.define('user', {
	  user_name: {
	  	type: DataTypes.TEXT,
      allowNull: false,
      len:[3,10]
	  },
	  email: DataTypes.TEXT,
		password: {
			type: DataTypes.TEXT,
      allowNull: false
		},
		street_name: DataTypes.TEXT,
		city:DataTypes.TEXT,
		state: DataTypes.TEXT,
		zip: DataTypes.TEXT ,
		
		phone_number:DataTypes.INTEGER
	},{
		classMethods:{
			associate: function(models) { 
				User.hasMany(models.ITEMS,{onDelete:'cascade', hooks:true});
				User.hasMany(models.Orders,{onDelete:'cascade', hooks:true});
			}
		}
	})

	return User;
}

