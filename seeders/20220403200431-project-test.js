'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Project",
      [
        {
          name: "Create project 1",
          description: "Create first project for challenge",
          projectManager: "Roberto Veintemilla",
          userId: 1,
          status: "0",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Create project 2",
          description: "Create second project for challenge",
          projectManager: "Roberto Veintemilla",
          userId: 2,
          status: "0",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Create project 3",
          description: "Create third project for challenge",
          projectManager: "Roberto Veintemilla",
          userId: 3,
          status: "0",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
