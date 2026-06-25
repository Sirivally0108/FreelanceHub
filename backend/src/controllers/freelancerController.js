const pool = require("../config/db");

exports.getDashboard = async (req, res) => {
  try {
    const freelancerId = req.params.id;

    const applications = await pool.query(
      `
      SELECT COUNT(*) 
      FROM proposals
      WHERE freelancer_id=$1
      `,
      [freelancerId]
    );

    const wonProjects = await pool.query(
      `
      SELECT COUNT(*)
      FROM proposals
      WHERE freelancer_id=$1
      AND status='accepted'
      `,
      [freelancerId]
    );

    const reviews = await pool.query(
      `
      SELECT AVG(rating) as rating
      FROM reviews
      WHERE reviewed_user_id=$1
      `,
      [freelancerId]
    );

    const messages = await pool.query(
      `
      SELECT COUNT(*)
      FROM messages
      WHERE receiver_id=$1
      `,
      [freelancerId]
    );

    const projects = await pool.query(
      `
      SELECT p.*
      FROM projects p
      JOIN proposals pr
      ON p.project_id = pr.project_id
      WHERE pr.freelancer_id=$1
      `,
      [freelancerId]
    );

    res.json({
      success: true,
      applications: applications.rows[0].count,
      wonProjects: wonProjects.rows[0].count,
      rating: reviews.rows[0].rating || 0,
      messages: messages.rows[0].count,
      projects: projects.rows
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};