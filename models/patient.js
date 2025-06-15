module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  return sequelize.define("Patient", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    disease: DataTypes.STRING,
  });
};