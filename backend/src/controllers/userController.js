const pool = require('../config/db');
const bcrypt = require('bcryptjs');

// Register User
exports.registerUser = async (req, res) => {
    try {

        const { name, email, password, role } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `
            INSERT INTO users (name,email,password,role)
            VALUES($1,$2,$3,$4)
            RETURNING *
            `,
            [name, email, hashedPassword, role]
        );

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result.rows[0]
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// Login User
exports.loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const result = await pool.query(
            `
            SELECT *
            FROM users
            WHERE email=$1
            `,
            [email]
        );

        if (result.rows.length === 0) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }

        const user = result.rows[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {

            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });

        }

        res.json({
            success: true,
            message: "Login successful",
            data: user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Get All Users
exports.getUsers = async (req, res) => {

    try {

        const result = await pool.query(
            `
            SELECT *
            FROM users
            `
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