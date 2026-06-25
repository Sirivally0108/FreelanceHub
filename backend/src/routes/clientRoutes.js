const express = require("express");

const router = express.Router();

const {
  getDashboard
} = require("../controllers/clientController");

router.get("/:id/dashboard", getDashboard);

module.exports = router;