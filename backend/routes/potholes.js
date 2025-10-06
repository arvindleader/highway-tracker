const express = require('express');
const router = express.Router();
const Pothole = require('../models/Pothole');

router.get('/', async (req, res) => {
  const potholes = await Pothole.find();
  res.json(potholes);
});

router.post('/', async (req, res) => {
  const pothole = new Pothole(req.body);
  await pothole.save();
  res.status(201).json(pothole);
});

module.exports = router;
