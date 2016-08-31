'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Images', [{
        /*url : 'https://wanderersessentials.herokuapp.com/img/tobaccovanSquare.jpg',*/
        url : '/img/tobaccovan.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId: 3
      },{
        url  : '/img/tobaccovanSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 3
      },{
        url  : '/img/peppermintSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 2
      },
      {
        url  : '/img/bachelorSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 1
      },
      {
        url  : ' /img/tobaccovansquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 6
      },
      {
        url  : '/img/beardbalmSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 4
      },
      {
        url  : '/img/tobaccocandleSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 7
      },{
        url  : '/img/shavesoapsetSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 8
      },
      {
        url  : '/img/crate.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 5
      },
      {
        url  : '/img/explorerscrate.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 9
      },
      {
        url  : '/img/adventurecrateSquare.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        ITEMId : 10
      }], 
   {});
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