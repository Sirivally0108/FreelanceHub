exports.getProjects = (req, res) => {
    res.json({
        message: "All projects retrieved successfully"
    });
};

exports.createProject = (req, res) => {
    res.json({
        message: "Project created successfully"
    });
};

exports.updateProject = (req, res) => {
    res.json({
        message: "Project updated successfully"
    });
};

exports.deleteProject = (req, res) => {
    res.json({
        message: "Project deleted successfully"
    });
};