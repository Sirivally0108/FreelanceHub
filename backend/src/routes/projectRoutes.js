const express = require('express');
const auth = require("../middleware/auth");
const router = express.Router();

const {
    createProject,
    getProjects,
    getProjectById
} = require('../controllers/projectController');

router.post("/", auth, createProject);

router.get('/', getProjects);

router.get('/:id', getProjectById);

module.exports = router;