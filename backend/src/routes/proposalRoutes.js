const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const {

submitProposal,

getProposalsByProject,

getProposalsByFreelancer,

updateProposalStatus,

getFreelancerEarnings

}=require("../controllers/proposalController");

router.post("/", auth, submitProposal);

router.get("/project/:id", getProposalsByProject);

router.get("/freelancer/:id", getProposalsByFreelancer);

router.get(
"/earnings/:id",
getFreelancerEarnings
);

router.put("/:id", updateProposalStatus);

module.exports = router;