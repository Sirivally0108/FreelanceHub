const express = require('express');
const auth = require("../middleware/auth");
const router = express.Router();

const {
    addReview,
    getReviews
} = require('../controllers/reviewController');

router.post("/", auth, addReview);

router.get('/:id', getReviews);

module.exports = router;