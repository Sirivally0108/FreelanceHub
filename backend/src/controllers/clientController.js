const pool = require("../config/db");

exports.getDashboard = async (req, res) => {
  try {
    const clientId = req.params.id;

    const projects = await pool.query(
      `
      SELECT *
      FROM projects
      WHERE client_id=$1
      `,
      [clientId]
    );

    const proposals = await pool.query(
      `
      SELECT COUNT(*)
      FROM proposals pr
      JOIN projects p
      ON p.project_id = pr.project_id
      WHERE p.client_id=$1
      `,
      [clientId]
    );

    const messages = await pool.query(
      `
      SELECT COUNT(*)
      FROM messages
      WHERE receiver_id=$1
      `,
      [clientId]
    );

    const notifications = await pool.query(
      `
      SELECT COUNT(*)
      FROM notifications
      WHERE user_id=$1
      `,
      [clientId]
    );

    res.json({
      success: true,
      projectsCount: projects.rows.length,
      proposals: proposals.rows[0].count,
      messages: messages.rows[0].count,
      notifications: notifications.rows[0].count,
      projects: projects.rows
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};