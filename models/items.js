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

       /* ITEMS.hasMany(models.Images);*/
        // associations can be defined here

      }
    }
  });
  return ITEMS;
};