const {Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE"
      });
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    projectManager: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  },
  {
    sequelize,
    modelName: "Project"
  });
  return Project
}