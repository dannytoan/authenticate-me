'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    collectionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, {foreignKey: "userId"})
    Photo.belongsTo(models.Collection, {foreignKey: "collectionId"})
  };
  return Photo;
};
