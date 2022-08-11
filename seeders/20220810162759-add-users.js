'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
       createdAt: new Date(),
      updatedAt: new Date()
   },{
      name: 'Doe John',
        createdAt: new Date(),
      updatedAt: new Date()
   },{
      name: 'Amit John',
      createdAt: new Date(),
      updatedAt: new Date()
   }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users',null,{});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
