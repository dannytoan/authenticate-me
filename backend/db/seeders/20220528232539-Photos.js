"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Photos",
      [
        {
          userId: 1,
          collectionId: 1,
          imageUrl:
            "https://wwd.com/wp-content/uploads/2022/02/Couture-Trend-S22-Grand-Gestures-15.jpeg?w=683",
          description: "Rahul Mishra Couture Spring 2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          collectionId: 1,
          imageUrl:
          "https://wwd.com/wp-content/uploads/2022/02/act-n1-milano-fall-2022-24-2.jpg?w=1280",
          description: "ACT N°1 A/W 22",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          collectionId: 1,
          imageUrl:
          "https://wwd.com/wp-content/uploads/2022/04/AZ-Factory-Thebe-Magugu-RTW-F22-CTSY-09.jpg?w=1280",
          description: "AZ Factory x Thebe Magugu RTW Fall 2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          collectionId: 1,
          imageUrl:
          "https://wwd.com/wp-content/uploads/2022/01/Y-Project-mens-fw22_040.jpg?w=1280",
          description: "Y/Project Men's Fall 2022",
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
      */
    return queryInterface.bulkDelete("Photos", null, {});
  },
};
