const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Models {
    static associate(models) {
      this.hasMany(models.Project, {
        foreignKey: "userId"
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User"
    }
  );
  return User
}