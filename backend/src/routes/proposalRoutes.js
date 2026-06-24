const express = require('express');

const router = express.Router();

const {
    submitProposal,
    getProposalsByProject
} = require('../controllers/proposalController');


router.post('/', submitProposal);

router.get('/project/:id', getProposalsByProject);


module.exports = router;