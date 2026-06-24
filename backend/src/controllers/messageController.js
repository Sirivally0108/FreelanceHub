const pool = require('../config/db');


// Send Message
exports.sendMessage = async (req, res) => {

    try {

        const {
            sender_id,
            receiver_id,
            message
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO messages
            (
                sender_id,
                receiver_id,
                message
            )
            VALUES($1,$2,$3)
            RETURNING *
            `,
            [sender_id, receiver_id, message]
        );

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
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


// Get Conversation
exports.getConversation = async (req, res) => {

    try {

        const {
            sender,
            receiver
        } = req.params;

        const result = await pool.query(
            `
            SELECT *
            FROM messages
            WHERE
            (sender_id=$1 AND receiver_id=$2)
            OR
            (sender_id=$2 AND receiver_id=$1)
            ORDER BY sent_at
            `,
            [sender, receiver]
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