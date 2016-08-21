'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Images', [{
        url  : 'https://wanderersessentials.herokuapp.com/img/tobaccovanSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 3
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/tobaccovanSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 3
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/peppermintSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 2
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/bachelorSquare.jpg',
        createdAt: new Date(),
<<<<<<< HEAD
        updatedAt: new Date()
      },{
          product: 'The Wanderers Crate!',
        price: 100.00,
        stock:300,
        materials:"6 Goats Milk Soap, Beard Balm, Wanders Shave Soap with Shave Brush, Coffee and Coconut Facial Scrub, Tobacco and Vanilla Soy Candle",
        info:"Come and Wander into the Wanderers World of Essentials that you must have! With the Wanderers Crate, you are becoming an honorary Wanderer with a one stop shop of all the Essentials!",
=======
        updatedAt: new Date(),
        ITEMId : 1
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/sandalwoodbourbonSquare.jpg',
>>>>>>> c944a0a8513b0939e3106fe71ea1eea486ff5e99
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 6
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/beardbalmSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 4
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/tobaccocandleSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 7
      },{
        url  : 'https://wanderersessentials.herokuapp.com/img/shavesoapsetSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 8
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/crate.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 5
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/explorerscrate.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 9
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/adventurecrateSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 10
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