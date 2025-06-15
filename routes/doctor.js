const express = require("express");
const { Doctor } = require("../models");
const router = express.Router();

router.post("/", async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
});

router.get("/", async (req, res) => {
  const doctors = await Doctor.findAll();
  res.json(doctors);
});

router.get("/:id", async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ error: "Not found" });
  res.json(doctor);
});

router.put("/:id", async (req, res) => {
  await Doctor.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  await Doctor.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
});

module.exports = router;