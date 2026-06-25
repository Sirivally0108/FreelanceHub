const express = require("express");

const router = express.Router();

const {
  submitProposal,
  getProposalsByProject,
  getProposalsByFreelancer,
  updateProposalStatus
} = require("../controllers/proposalController");

router.post("/", submitProposal);

router.get("/project/:id", getProposalsByProject);

router.get("/freelancer/:id", getProposalsByFreelancer);

router.put("/:id", updateProposalStatus);

module.exports = router;