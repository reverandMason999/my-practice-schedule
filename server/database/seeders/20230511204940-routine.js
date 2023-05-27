'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Routines', [{
      name: 'timing exercises',
      dayOfWeek: 'Monday',
      userId: 1,
      bpm: '120-130',
      description: 'a simple timing warmup in 4:4',
      duration: '15 minutes',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routines', null, {});
  }
};
