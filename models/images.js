'use strict';
module.exports = function(sequelize, DataTypes) {
  var Images = sequelize.define('Images', {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Images;
};

