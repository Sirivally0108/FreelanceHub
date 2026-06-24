const pool = require('../config/db');

// Create Notification
exports.createNotification = async (req, res) => {

    try {

        const {
            user_id,
            notification_message
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO notifications
            (
                user_id,
                notification_message
            )
            VALUES($1,$2)
            RETURNING *
            `,
            [user_id, notification_message]
        );

        res.status(201).json({
            success: true,
            message: "Notification created successfully",
            data: result.rows[0]
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Get Notifications
exports.getNotifications = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(
            `
            SELECT *
            FROM notifications
            WHERE user_id=$1
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