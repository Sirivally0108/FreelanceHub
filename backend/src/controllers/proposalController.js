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
        const existing = await pool.query(
        `
        SELECT *
        FROM proposals
        WHERE project_id=$1
        AND freelancer_id=$2
        `,
        [project_id, freelancer_id]
        );

        if(existing.rows.length > 0){
        return res.status(400).json({
            success:false,
            message:"Already Applied"
        });
        }
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
// Get Proposals By Freelancer

exports.getProposalsByFreelancer = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM proposals
      WHERE freelancer_id=$1
      `,
      [id]
    );

    res.json({
      success: true,
      data: result.rows,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
exports.updateProposalStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      `
      UPDATE proposals
      SET status=$1
      WHERE proposal_id=$2
      RETURNING *
      `,
      [status, id]
    );

    res.json({
      success: true,
      data: result.rows[0]
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};