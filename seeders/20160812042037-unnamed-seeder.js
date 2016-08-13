'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Images', [{
        url  : 'https://wanderersessentials.herokuapp.com/img/tobaccovanSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/peppermintSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/bachelorSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/sandalwoodbourbonSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/beardbalmSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/tobaccocandleSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        url  : 'https://wanderersessentials.herokuapp.com/img/shavesoapsetSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/crate.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/explorerscrate.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url  : 'https://wanderersessentials.herokuapp.com/img/adventurecrateSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
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
