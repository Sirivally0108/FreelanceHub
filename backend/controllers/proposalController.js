exports.getProposals = (req, res) => {
    res.json({
        message: "All proposals retrieved successfully"
    });
};

exports.createProposal = (req, res) => {
    res.json({
        message: "Proposal submitted successfully"
    });
};

exports.updateProposal = (req, res) => {
    res.json({
        message: "Proposal updated successfully"
    });
};