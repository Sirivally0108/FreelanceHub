exports.protect = (req, res, next) => {
    console.log("Protected route accessed");
    next();
};