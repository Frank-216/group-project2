'use strict';
module.exports = function(sequelize, DataTypes) {
  var ITEMS = sequelize.define('ITEMS', {
    product: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    materials: DataTypes.STRING,
    info: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {  


            
        // associations can be defined here
        ITEMS.hasMany(models.Images,{onDelete:'cascade', hooks:true});
      }
    }
  });
  return ITEMS;
};