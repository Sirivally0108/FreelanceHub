const express = require('express');

const app = express();

app.use(express.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const proposalRoutes = require('./routes/proposalRoutes');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/proposals', proposalRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('FreelanceHub Backend Running');
});

module.exports = app;