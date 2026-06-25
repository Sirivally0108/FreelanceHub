const pool = require("../config/db");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const result = await pool.query(
      `
      INSERT INTO users(name,email,password,role)
      VALUES($1,$2,$3,$4)
      RETURNING *
      `,
      [name, email, password, role]
    );

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    res.status(500).json({
        success: false,
        message: error.message,
    });
    }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      `
      SELECT *
      FROM users
      WHERE email=$1
      AND password=$2
      `,
      [email, password]
    );

    if (result.rows.length === 0) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.json({
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};