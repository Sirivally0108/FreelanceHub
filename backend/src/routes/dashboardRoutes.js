const express = require("express");
const router = express.Router();

const {
clientDashboard
} = require("../controllers/dashboardController");

router.get("/client",clientDashboard);

module.exports = router;