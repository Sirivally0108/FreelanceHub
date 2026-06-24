const pool = require('../config/db');


// Submit Proposal
exports.submitProposal = async (req, res) => {

    try {

        const {
            project_id,
            freelancer_id,
            proposal_text,
            proposed_budget
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO proposals
            (
                project_id,
                freelancer_id,
                proposal_text,
                proposed_budget
            )
            VALUES($1,$2,$3,$4)
            RETURNING *
            `,
            [
                project_id,
                freelancer_id,
                proposal_text,
                proposed_budget
            ]
        );

        res.status(201).json({
            success: true,
            message: "Proposal submitted successfully",
            data: result.rows[0]
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Get Proposals for Project
exports.getProposalsByProject = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(
            `
            SELECT *
            FROM proposals
            WHERE project_id=$1
            `,
            [id]
        );

        res.json({
            success: true,
            data: result.rows
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};