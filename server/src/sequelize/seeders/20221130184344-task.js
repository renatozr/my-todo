'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        name: 'Wash the dishes',
        statusId: 2,
        createdAt: new Date()
      },
      {
        name: 'Brush my teeth',
        statusId: 3,
        createdAt: new Date()
      },
      {
        name: 'Study for the exam',
        statusId: 1,
        createdAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
