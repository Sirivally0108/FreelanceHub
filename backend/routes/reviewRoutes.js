const express = require("express");

const router = express.Router();

const {
  getReviewsByFreelancer
} = require("../controllers/reviewController");

router.get("/freelancer/:id", getReviewsByFreelancer);

module.exports = router;