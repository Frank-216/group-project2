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
      return queryInterface.bulkInsert('ITEMs', [{
        id: 1,
        product: 'The Bachelor Goats Milk Soap',
        price: 6.00,
        stock:100,
        materials:"Coconut Oil, Palm Oil, Safflower Oil, Glycerin, Goats Milk, Purfied Water, Sodium Hydroxide, Sorbitol, Sorbitan Oleate, Oat Protein, Titanium Dioxide, Poppy Seeds",
        info:"Starting with aromatic fern, accompanied by refreshing lavender and mentholated notes, and graduates toward a heart and base built on warm vanilla tones",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 2,
        product: 'Peppermint and Tea Tree Oil Goats Milk Soap',
        price: 6.00,
        stock:216,
        materials:"Coconut Oil, Safflower Oil, Palm Oil, Glycerin, Goats Milk, Purified Water, Sodium Hydroxide, Sorbitol, Sorbitan Oleate, Oat Protein, Titanium Dioxide, Blueberry Seeds",
        info:"Strong, bold and mintys",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 3,
        product: 'Tobacco and Vanilla Goats Milk Soap',
        price: 6.00,
        stock:216,
        materials:"Coconut Oil, Palm Oil, Safflower Oil, Purified Water, Glycerin, Goats Milk, Sodium Hydroxide, Sorbitol, Sorbitan Oleate, Oat Protein, Titanium Dioxide, Poppy Seeds",
        info:"The smell of fresh cut tobacco leaves with an undertone of vanilla. Fresh vanilla with a dark background. Not the smell of dried or roasted tobacco leaves that would be in a cigar/cigarette/pipe",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 4,
        product: 'Beard Balm',
        price: 11.00,
        stock:300,
        materials:"Beeswax, Shea Butter, Cocoa Butter, Jojoba Oil",
        info:"Tame your Mane! This all natural Beard Balm is essentially a leave in conditioner for your beard....or mustache. With continual use your beard will soften up and you will have a dapper looking mane",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 5,
        product: 'The Wanderers Crate!',
        price: 100.00,
        stock:300,
        materials:"6 Goats Milk Soap, Bear Balm, Wanders Shave Soap with Shave Brush, Coffee and Coconut Facial Scrub, Tobacco and Vanilla Soy Candle",
        info:"Come and Wander into the Wanderers World of Essentials that you must have! With the Wanderers Crate, you are becoming an honorary Wanderer with a one stop shop of all the Essentials!",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 6,
        product: 'Sandalwood Bourbon Goats Milk Soap',
        price: 6.00,
        stock:65,
        materials:"Coconut Oil, Palm Oil, Safflower Oil, Glycerine, Goats Milk, Purified Water, Sodium Hydroxide, Sorbitol, Sorbitan Oleate, Oat Protein, Titanium Dioxide",
        info:"A distinct and handsome blend with lively notes of bergamot and cedar leaf uniquely paired with malted violet and precious jasmine on a base of aged oak, patchouli and sandalwood",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 7,
        product: 'Tobacco Vanilla Soy Candle',
        price: 10.00,
        stock:650,
        materials:"Coconut Oil, Palm Oil, Safflower Oil, Glycerine, Goats Milk, Purified Water, Sodium Hydroxide, Sorbitol, Sorbitan Oleate, Oat Protein, Titanium Dioxide",
        info:"Upon returning from their journeys, The Wanderer likes to sit back and relax with the scent of a Tobacco and Vanilla Candle lit. This soy candle has a wooden wick, allowing you to hear the faint crackling of a fire as you sit back and enjoy the smell",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 8,
        product: 'Shaving Soap Set',
        price: 16.00,
        stock:400,
        materials:"Bentonite Clay, Glycerin, Essential Oils, Coconut Oil, Palm Oil, Safflower Oil, Purified Water, Sodium Hydroxide, Sorbitol, Sorbitan Oleate, Oat Protein, Wheat Protein",
        info:"The Wanderer is always here or there and loves to have the feel of comfort and style wherever they go! Upon one of Wanderers travels!",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 9,
        product: 'The Explorers Crate',
        price: 60.00,
        stock:65,
        materials:"Beard Balm, Wanderers Shave Soap, Essential Shaving Brush, Homemade Crate",
        info:"Come and Explore what we have to offer at The Wanderers Essentials! In the Explorers Crate you'll be able to explore with a few new essentials you didn't know you needed! ",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 10,
        product: 'The Adventurers Crate',
        price: 35.00,
        stock:65,
        materials:"2 Homemade Soaps, Coffee & Coconet Facial scrub, homemade crate",
        info:"Adventure into The Wanderers Essentials with our starter crate! With it you receive two handmade soaps of your choosing! As well as our two-for-one Coffee and Coconut Facial scrub! Enjoy your Adventure using the Wanderers Essentials!",
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