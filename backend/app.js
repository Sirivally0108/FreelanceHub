const express = require('express');
const app = express();

app.use(express.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');

// Use Routes
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('FreelanceHub Backend Running');
});

module.exports = app;