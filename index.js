require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./models");
const authRoutes = require("./routes/auth");
const patientRoutes = require("./routes/patient");
const doctorRoutes = require("./routes/doctor");
const mappingRoutes = require("./routes/mapping");
const authenticate = require("./middleware/authenticate");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/patients", authenticate, patientRoutes);
app.use("/api/doctors", authenticate, doctorRoutes);
app.use("/api/mappings", authenticate, mappingRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});