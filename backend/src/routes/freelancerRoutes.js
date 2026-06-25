const express = require("express");

const router = express.Router();

const {
  getDashboard
} = require("../controllers/freelancerController");

router.get("/:id/dashboard", getDashboard);

module.exports = router;