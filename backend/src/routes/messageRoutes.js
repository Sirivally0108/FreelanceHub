const express = require('express');

const router = express.Router();

const {
    sendMessage,
    getConversation
} = require('../controllers/messageController');

router.post('/', sendMessage);

router.get('/:sender/:receiver', getConversation);

module.exports = router;