'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.bulkInsert('users', [{
        user_name: 'Frank Capraro',
        email:'frank.capraro@gmail.com'.
        password: "Passw0rd",
        street_name: "300 Atrium Drive",
        city: 'Franklin Township',
        state: 'NJ',
        zip: "08873",
        phone_number:"4326572234"
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
