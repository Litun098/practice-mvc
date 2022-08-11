'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies',[{
      name:"Amazon",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'Infosys',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:'TCS',
      createdAt:new Date(),
      updatedAt:new Date()
    }],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies',null,{});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
