// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const domainRoutes = require('./routes/domainRoutes');
const dnsRecordRoutes = require('./routes/dnsRecordRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect('mongodb://localhost:27017/dnsManager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/domains', domainRoutes);
app.use('/dns-records', dnsRecordRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
