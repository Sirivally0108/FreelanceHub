exports.getMessages = (req, res) => {
    res.json({
        message: "Messages retrieved successfully"
    });
};

exports.sendMessage = (req, res) => {
    res.json({
        message: "Message sent successfully"
    });
};