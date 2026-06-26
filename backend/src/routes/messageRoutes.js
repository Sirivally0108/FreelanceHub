const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const {
  sendMessage,
  getConversation
} = require("../controllers/messageController");

router.post("/", auth, sendMessage);

router.get("/:sender/:receiver", getConversation);

module.exports = router;