const express = require('express');
const router = express.Router();

const {
    getProposals,
    createProposal,
    updateProposal
} = require('../controllers/proposalController');

router.get('/', getProposals);

router.post('/', createProposal);

router.put('/:id', updateProposal);

module.exports = router;