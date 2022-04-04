'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          firstName: "Carlos",
          lastName: "Perez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Miguel",
          lastName: "Flores",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mike",
          lastName: "Gomez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Roberto",
          lastName: "Gonzalez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dulkDelete('Users', null, {})
  }
};
