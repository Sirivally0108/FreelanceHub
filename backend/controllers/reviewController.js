const pool = require("../config/db");

exports.getReviewsByFreelancer = async (req, res) => {
  try {

    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM reviews
      WHERE freelancer_id=$1
      `,
      [id]
    );

    res.json({
      success: true,
      data: result.rows
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};