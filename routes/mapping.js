const express = require("express");
const { Mapping, Patient, Doctor } = require("../models");
const router = express.Router();

router.post("/", async (req, res) => {
  const { patientId, doctorId } = req.body;
  const map = await Mapping.create({ PatientId: patientId, DoctorId: doctorId });
  res.json(map);
});

router.get("/", async (req, res) => {
  const maps = await Mapping.findAll({ include: [Patient, Doctor] });
  res.json(maps);
});

router.get("/:patientId", async (req, res) => {
  const maps = await Mapping.findAll({ where: { PatientId: req.params.patientId }, include: [Doctor] });
  res.json(maps);
});

router.delete("/:id", async (req, res) => {
  await Mapping.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
});

module.exports = router;