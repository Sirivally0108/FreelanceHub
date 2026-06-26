const pool = require('../config/db');


// Create Project
exports.createProject = async (req, res) => {

  try {

    const {
      title,
      description,
      budget
    } = req.body;

    // Get client ID from the verified JWT token
    const client_id = req.user.id;

    const result = await pool.query(
      `
      INSERT INTO projects
      (title,description,budget,client_id)
      VALUES($1,$2,$3,$4)
      RETURNING *
      `,
      [
        title,
        description,
        budget,
        client_id
      ]
    );

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: result.rows[0]
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};


// Get All Projects
exports.getProjects = async (req, res) => {
    console.log("=== GET PROJECTS CALLED ===");
    try {

        const result = await pool.query(
            `
            SELECT *
            FROM projects
            `
        );

        res.json({
            success: true,
            data: result.rows
        });

    }

    catch (error) {

        console.log("DATABASE ERROR:");
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Get Project By ID
exports.getProjectById = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(
            `
            SELECT *
            FROM projects
            WHERE project_id=$1
            `,
            [id]
        );

        res.json({
            success: true,
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