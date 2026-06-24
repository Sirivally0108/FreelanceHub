const pool = require('../config/db');

// Add Review
exports.addReview = async (req, res) => {

    try {

        const {
            reviewer_id,
            reviewed_user_id,
            rating,
            review_text
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO reviews
            (
                reviewer_id,
                reviewed_user_id,
                rating,
                review_text
            )
            VALUES($1,$2,$3,$4)
            RETURNING *
            `,
            [reviewer_id, reviewed_user_id, rating, review_text]
        );

        res.status(201).json({
            success: true,
            message: "Review added successfully",
            data: result.rows[0]
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Get Reviews of User
exports.getReviews = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(
            `
            SELECT *
            FROM reviews
            WHERE reviewed_user_id=$1
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