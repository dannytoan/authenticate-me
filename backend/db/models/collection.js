'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
    Collection.belongsTo(models.User, {foreignKey: "userId"})
    Collection.hasMany(models.Photo, {foreignKey: "collectionId", onDelete: "CASCADE", hooks: true})
  };
  return Collection;
};
