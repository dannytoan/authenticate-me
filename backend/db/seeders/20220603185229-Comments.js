"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          id: 1,
          photoId: 1,
          userId: 1,
          comment: "I love this shade of purple!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          photoId: 1,
          userId: 2,
          comment: "The sleeves on this dress is immaculate.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          photoId: 1,
          userId: 3,
          comment: "Why do designers like to wrap the model's faces? lol",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
   return queryInterface.bulkDelete('Comments', null, {});
  },
};
