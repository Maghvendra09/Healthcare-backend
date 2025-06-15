const express = require("express");
const { Patient } = require("../models");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, age, disease } = req.body;
  const patient = await Patient.create({ name, age, disease, UserId: req.user.id });
  res.json(patient);
});

router.get("/", async (req, res) => {
  const patients = await Patient.findAll({ where: { UserId: req.user.id } });
  res.json(patients);
});

router.get("/:id", async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ error: "Not found" });
  res.json(patient);
});

router.put("/:id", async (req, res) => {
  await Patient.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  await Patient.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
});

module.exports = router;