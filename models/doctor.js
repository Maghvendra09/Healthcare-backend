module.exports = (sequelize) => {
  const { DataTypes } = require("sequelize");
  return sequelize.define("Doctor", {
    name: DataTypes.STRING,
    specialization: DataTypes.STRING,
  });
};