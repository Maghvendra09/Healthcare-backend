const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

const User = require("./user")(sequelize);
const Patient = require("./patient")(sequelize);
const Doctor = require("./doctor")(sequelize);
const Mapping = require("./mapping")(sequelize);

User.hasMany(Patient);
Patient.belongsTo(User);

Mapping.belongsTo(Patient);
Mapping.belongsTo(Doctor);
Patient.hasMany(Mapping);
Doctor.hasMany(Mapping);

module.exports = { sequelize, User, Patient, Doctor, Mapping };